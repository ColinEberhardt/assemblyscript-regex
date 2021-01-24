import { Char } from "../char";
import {
  AssertionNode,
  AST,
  ConcatenationNode,
  Node,
  RangeRepetitionNode,
  RepetitionNode,
} from "./node";

export class NodeVisitor {
  _delete: bool = false;

  constructor(public node: Node, public parentNode: Node) {}

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
      const expressions = c.expressions;
      const index = expressions.indexOf(node);
      const subset = expressions
        .slice(0, index)
        .concat(expressions.slice(index + 1));
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
export function walker(ast: AST, visitor: (node: NodeVisitor) => void): void {
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
  let node = nodeVisitor.node;
  if (ConcatenationNode.is(node)) {
    if ((node as ConcatenationNode).expressions.length == 0) {
      nodeVisitor.delete();
    }
  }
}

// range quantifiers are implemented via 'expansion', which significantly
// increases the size of the AST. This imposes a hard limit to prevent
// memory-related issues
const QUANTIFIER_LIMIT = 1000;

function parentAsConcatNode(visitor: NodeVisitor): ConcatenationNode {
  let concatNode: ConcatenationNode | null = null;
  let parentNode = visitor.parentNode;
  if (!ConcatenationNode.is(parentNode)) {
    let node = visitor.node;
    concatNode = new ConcatenationNode([node]);
    parentNode.replace(node, concatNode);
    return concatNode;
  }
  return parentNode as ConcatenationNode;
}

// take each range repetition and replace with a concatenation
// of cloned nodes, e.g. a{2} becomes aa
export function expandRepetitions(visitor: NodeVisitor): void {
  let node = visitor.node;
  if (RangeRepetitionNode.is(node)) {
    // find the parent
    const rangeRepNode = node as RangeRepetitionNode;

    if (rangeRepNode.to > QUANTIFIER_LIMIT) {
      throw new Error(
        "Cannot handle range quantifiers > " + QUANTIFIER_LIMIT.toString()
      );
    }
    const concatNode = parentAsConcatNode(visitor);
    const expressions = concatNode.expressions;

    // locate the original index
    const index = expressions.indexOf(rangeRepNode);

    const from = rangeRepNode.from;
    const expression = rangeRepNode.expression;
    // create multiple clones
    const clones = new Array<Node>(from);
    // a{4} => aaaa
    for (let i = 0; i < from; i++) {
      clones[i] = expression.clone();
    }

    if (rangeRepNode.to == -1) {
      // a{4,} => aaaaa*
      clones.push(new RepetitionNode(expression.clone(), Char.Asterisk));
    } else {
      // a{4,6} => aaaaa?a?
      const count = rangeRepNode.to - rangeRepNode.from;
      for (let i = 0; i < count; i++) {
        clones.push(new RepetitionNode(expression.clone(), Char.Question));
      }
    }

    // replace the rangeRepNode with the clones
    concatNode.expressions = expressions
      .slice(0, index)
      .concat(clones)
      .concat(expressions.slice(index + 1));
  }
}
