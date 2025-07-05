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
  //   Floyd’s Cycle Detection Algorithm
  hasCycle(node) {
    let slowPtr = node;
    let fastPtr = node;
    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if (slowPtr === fastPtr) {
        return true;
      }
    }
    return false;
  }

  print() {
    if (this.head === null) {
      console.log("No data found!");
      return;
    }
    let temp = this.head;
    while (temp) {
      console.log("The node is ", temp.data);
      temp = temp.next;
    }
    return;
  }
}

let newList = new LinkedList();
const node1 = new Node(3);
const node2 = new Node(2);
const node3 = new Node(0);
const node4 = new Node(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
s;

console.log("Is having cycle", newList.hasCycle(node1));
