import { AST, ConcatenationNode, Node } from "./parser";

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
  if (ConcatenationNode.is(node)) {
    const c = node as ConcatenationNode;
    for (let i = c.expressions.length - 1; i >= 0; i--) {
      walkNode(c.expressions[i], node, visitor);
    }
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
    } else {
      throw new Error("cannot delete a node that doesn't have a ConcatenationNode parent");
    }
  }
}

// depth first, right-left walker
export function walk(ast: AST, visitor: (node: NodeVisitor) => void): void {
  walkNode(ast.body, null, visitor);
}
