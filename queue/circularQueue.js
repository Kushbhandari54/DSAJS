class CircularQueue {
  constructor(size) {
    this.items = Array(size).fill(null);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full!");
      return;
    }

    if (this.front === -1) this.front = 0; // Initialize front if queue was empty

    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }

    const removedElement = this.items[this.front];
    if (this.front === this.rear) {
      // Queue is empty after removing the last element
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return removedElement;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    let result = [];
    let i = this.front;

    while (true) {
      result.push(this.items[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }

    console.log(result.join(" <- "));
  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.printQueue(); // 10 <- 20 <- 30

circularQueue.dequeue();
circularQueue.printQueue(); // 20 <- 30
