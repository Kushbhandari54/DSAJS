let array=[0,3,4,5,0,3,0,3,5,0];
// Move all zeros to the end without external space.

let ptr1=0;
let ptr2=array.length -1;

while(ptr1 <= ptr2){
    if(array[ptr1]===0 && array[ptr2] !==0){
        [array[ptr1],array[ptr2]]=[array[ptr2], array[ptr1]];
        ptr1+=1;
        ptr2-=1;
    }
    else if(array[ptr1] !==0) {
        ptr1+=1;
    }
    else if( array[ptr2] ===0){
        ptr2-=1;
    }
    else{
     ptr2+=1;   
    }
}

console.log("Final Array is:", array);