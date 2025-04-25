class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  levelOrderTraversal(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length > 0) {
      const size = queue.length;
      let level = "";
      for (let i = 0; i < size; i++) {
        const current = queue.shift();
        level += current.data + " ";
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }

      console.log(level.trim());
    }
  }
}

const treeNode = new TreeNode(20);
treeNode.left = new TreeNode(10);
treeNode.right = new TreeNode(30);

treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(8);

treeNode.right.left = new TreeNode(25);
treeNode.right.right = new TreeNode(35);

treeNode.levelOrderTraversal(treeNode);
