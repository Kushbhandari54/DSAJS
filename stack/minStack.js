// Min Stack

// Problem: Design a stack that supports:
// push(x) → Add element x
// pop() → Remove the top element
// top() → Get the top element
// getMin() → Retrieve the minimum element efficiently

class MinStack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }
    push(item){
        this.stack.push(item);
        console.log("Item pushed successfully!");
        if(this.minStack.length===0 || item <= this.minStack[this.minStack.length-1]){
            this.minStack.push(item);
        }
    }
    pop(){
        if(this.stack.length===0){
            console.log("Stack is empty!");
            return;
        }
        let item=this.stack.pop();
        if(item===this.minStack[this.minStack.length-1] ){
            this.minStack.pop();
        }
        console.log("Item removed is ", item);
    }
    top(){
        return this.stack[this.stack.length-1]
    }
    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}

// Test
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin());  //-2