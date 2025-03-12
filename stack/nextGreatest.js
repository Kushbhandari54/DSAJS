function nextGreaterElement(arr){
    let stack=[]; 
    let result=Array(arr.length).fill(-1); 
    
    for(let i=0;i<arr.length;i++){ 
        while(stack.length && arr[i]> arr[stack[stack.length-1]]){ 
           const index=stack.pop(); 
           result[index]=arr[i]; 
        }
        stack.push(i);
    }
    return result; 
    
}

console.log(nextGreaterElement([4, 5, 2, 25]))