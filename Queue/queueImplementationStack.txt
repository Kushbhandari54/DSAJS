// enqueue() → Add element to the end
// dequeue() → Remove element from the front
// front() → Get the front element without removing it
// isEmpty() → Check if the queue is empty
// size() → Get the number of elements in the queue

class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(item){
        this.queue.push(item);
        console.log("Item pushed successfully!");
    }
    dequeue(){
        if(this.queue.length !==0){
       return  this.queue.shift();
        }
        console.log("Queue is empty!");
    }
    front(){
        if(this.queue.length===0){
            return  `Queue is empty`
        }
        let frontItem= this.queue[0];
        return frontItem;
    }
    isEmpty(){
     return this.queue.length ===0;
        
    }
    size(){
        return this.queue.length;
    }
    printQueue(){
        this.stack.length >0 && this.stack.forEach(item=> console.log(item))
    }
    
}

const queue = new Queue();

queue.enqueue("Kush");
queue.enqueue("Rohan");
queue.enqueue("Neha");

queue.printQueue(); // Kush <- Rohan <- Neha

console.log(queue.front()); // Kush

queue.dequeue();
queue.printQueue(); // Rohan <- Neha

console.log(queue.isEmpty()); // false
console.log(queue.size()); /
