import {
  AssertionNode,
  AST,
  ConcatenationNode,
  Node
} from "./parser";

class NodeVisitor {
  node: Node;
  _delete: bool;

  constructor(node: Node) {
    this.node = node;
    this._delete = false;
  }

  delete(): void {
    this._delete = true;
  }
}

function walkNode(
  node: Node,
  parentNode: Node | null,
  visitor: (node: NodeVisitor) => void
): void {
  const children = node.children();
  for (let i = children.length - 1; i >= 0; i--) {
    walkNode(children[i], node, visitor);
  }

  const nodeVisitor = new NodeVisitor(node);
  visitor(nodeVisitor);
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
      c.body = null;
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
