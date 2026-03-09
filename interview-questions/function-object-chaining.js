// Currying
// sum(10,20)  30
// sum(10)(20) 30

//sum(1)(2)(3)(4)()

function sum(n) {
  // Solution with recursion
  // return (b)=>{
  //     if(b !==undefined){
  //         return sum(n+b);
  //     }
  //     else {
  //         return n
  //     }
  // }

  // Solution without recursion

  // let total=n
  // function inner(b){
  //     if(b==undefined){
  //         return total
  //     }
  //     total+=b;
  //     return inner
  // }
  // return inner

  // without calling parathesis

  let result = n;
  function inner(b) {
    result += b;
    return inner;
  }
  inner.valueOf = function () {
    return result;
  };
  return inner;
}

// sum(1)(2)(3)(4)() // 10
// sum(5)(0)(5)()    // 10
console.log(sum(1)(2)(3) == 6);
