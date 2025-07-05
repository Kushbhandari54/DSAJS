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
}

let newList = new LinkedList();

newList.print();
newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);

console.log("Original Data");
newList.print();
newList.reverse();

console.log("After Reverse");
newList.print();
