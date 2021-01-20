import { AssertionNode, AST, ConcatenationNode, Node, RangeRepetitionNode } from "./node";
import { toArray } from "./util";

export class NodeVisitor {
  node: Node;
  parentNode: Node;
  _delete: bool;

  constructor(node: Node, parentNode: Node) {
    this.node = node;
    this.parentNode = parentNode;
    this._delete = false;
  }

  delete(): void {
    this._delete = true;
  }
}

function walkNode(
  node: Node,
  parentNode: Node,
  visitor: (node: NodeVisitor) => void
): void {
  const children = node.children();
  for (let i = children.length - 1; i >= 0; i--) {
    walkNode(children[i], node, visitor);
  }

  const nodeVisitor = new NodeVisitor(node, parentNode);
  visitor(nodeVisitor);

  // TODO - the delete function is a bit half-baked, it needs to crawl up the tree
  if (nodeVisitor._delete) {
    if (parentNode != null && ConcatenationNode.is(parentNode)) {
      const c = parentNode as ConcatenationNode;
      const index = c.expressions.indexOf(node);
      const subset = c.expressions
        .slice(0, index)
        .concat(c.expressions.slice(index + 1));
      c.expressions = subset;
    } else if (parentNode != null && AST.is(parentNode)) {
      const c = parentNode as AST;
      // c.body = null;
    } else {
      throw new Error(
        "cannot delete a node that doesn't have a ConcatenationNode parent"
      );
    }
  }
}

// depth first, right-left walker
export function walk(ast: AST, visitor: (node: NodeVisitor) => void): void {
  let node = ast.body;
  if (node != null) {
    walkNode(node, ast, visitor);
  }
}

export function deleteAssertionNodes(nodeVisitor: NodeVisitor): void {
  if (AssertionNode.is(nodeVisitor.node)) {
    nodeVisitor.delete();
  }
}

export function deleteEmptyConcatenationNodes(nodeVisitor: NodeVisitor): void {
  if (ConcatenationNode.is(nodeVisitor.node)) {
    const c = nodeVisitor.node as ConcatenationNode;
    if (c.expressions.length == 0) {
      nodeVisitor.delete();
    }
  }
}

function parentAsConcatNode(visitor: NodeVisitor): ConcatenationNode {
  let concatNode: ConcatenationNode | null = null;
  if (!ConcatenationNode.is(visitor.parentNode)) {
    concatNode = new ConcatenationNode(toArray(visitor.node));
    visitor.parentNode.replace(visitor.node, concatNode);
  } else {
    concatNode = visitor.parentNode as ConcatenationNode;
  }
  return concatNode as ConcatenationNode;
}

// take each range repetition and replace with a concatenation
// of cloned nodes, e.g. a{2} becomes aa
export function expandRepetitions(visitor: NodeVisitor): void {
  if (RangeRepetitionNode.is(visitor.node)) {
    // find the parent
    const rangeRepNode = visitor.node as RangeRepetitionNode;
    const concatNode = parentAsConcatNode(visitor);

    // locate the original index
    const index = concatNode.expressions.indexOf(rangeRepNode);

    // create multiple clones
    const clones = new Array<Node>();
    const from = rangeRepNode.from;
    for (let i = 0; i < from; i++) {
      clones.push(rangeRepNode.expression.clone());
    }

    // replace the rangeRepNode with the clones
    concatNode.expressions = concatNode.expressions
      .slice(0, index)
      .concat(clones)
      .concat(concatNode.expressions.slice(index + 1));
  }
}
