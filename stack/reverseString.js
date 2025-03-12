// Reverse the string using stack
// Input: "hello"
// Output: "olleh"

let string="hello";
let stack=[];
let arrayString=string.split("");

for(let i=arrayString.length-1;i>=0;i--){
 
    stack.push(arrayString[i]);
}

console.log(stack.join(""));