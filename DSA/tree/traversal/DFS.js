class NodeTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  preOrderTraversal(node) {
    if (node === null) return;
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
  postOrderTraversal(node) {
    if (node === null) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }
  inOrderTraversal(node) {
    if (node === null) return;
    this.inOrderTraversal(node.left);
    console.log(node.data);
    this.inOrderTraversal(node.right);
  }
}

const newNode = new NodeTree(20);
newNode.left = new NodeTree(10);
newNode.right = new NodeTree(30);

newNode.left.left = new NodeTree(5);
newNode.left.right = new NodeTree(8);

newNode.right.left = new NodeTree(25);
newNode.right.right = new NodeTree(35);
newNode.preOrderTraversal(newNode);
console.log("+++++++++++++++++++++++++++");
newNode.postOrderTraversal(newNode);
console.log("+++++++++++++++++++++++++++");
newNode.inOrderTraversal(newNode);
