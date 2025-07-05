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

  // Insert At End
  append(data) {
    const newNode = new Node(data); // created a node
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print the list
  print() {
    let temp = this.head;
    if (!this.head) {
      console.log("No data to display");
      return null;
    }
    while (temp !== null) {
      console.log(`First Node Data is `, temp.data);
      temp = temp.next;
    }
  }
}

let firstNode = new LinkedList();

firstNode.print();
firstNode.append(10);
firstNode.append(20);
firstNode.append(30);
firstNode.print();
