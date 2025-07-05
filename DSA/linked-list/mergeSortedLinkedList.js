class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  mergeNode(head1, head2) {}
}

let node2 = new Node(20);
let node3 = new Node(40);
let node4 = new Node(60);

node2.next = node3;
node3.next = node4;

let node5 = new Node(10);
let node6 = new Node(30);
let node7 = new Node(50);

node5.next = node6;
node6.next = node7;

let newLinkedList = new LinkedList();

newLinkedList.mergeNode(node2, node5);
