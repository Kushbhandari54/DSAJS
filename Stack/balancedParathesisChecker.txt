let str="({[]})";
// Check whether balance or not;

let strStack=[];
let newStr=str.split("");
console.log(newStr,"NewStr")
let flag=true;
for(let i=0;i<newStr.length;i++){
    if(newStr[i]==="(" || newStr[i]==="{" || newStr[i] ==="["){
        strStack.push(newStr[i]);
    }
    else {
        if(strStack[-1]==="[" &&  newStr[i] !=="]" || strStack[-1]==="{" &&  newStr[i] !=="}" || strStack[-1]==="(" &&  newStr[i] !==")"  ){
            flag=false;
         break;
        }
        else {
            strStack.pop();
        }
    }
   
}
console.log(strStack)


flag && strStack.length ===0 ? console.log("Balance"): console.log("Not balance");