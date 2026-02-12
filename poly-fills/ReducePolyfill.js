let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let defaultValue = 0;

let sum = arr.reduce((acc, curr, arr, index) => {
  return acc + curr;
}, defaultValue);

console.log("Sum", sum);

Array.prototype.customReduce = function (fn) {
  let output = 0;
  for (let i = 0; i < this.length; i++) {
    output += fn(defaultValue, this[i]);
  }
  return output;
};

let result2 = arr.customReduce((val1, val2) => val1 + val2);
console.log("Result2", result2);
