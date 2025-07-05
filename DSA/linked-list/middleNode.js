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

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return prev;
  }
  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return;
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

  middleNode() {
    let slowPtr = this.head;
    let fastPtr = this.head;

    if (this.head === null) {
      return `No Data in LinkedList`;
    }
    while (fastPtr && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
      fastPtr = fastPtr.next;
    }
    return slowPtr.data;
  }
}

let newList = new LinkedList();

newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);
newList.append(50);

console.log("The middle node is ", newList.middleNode());
