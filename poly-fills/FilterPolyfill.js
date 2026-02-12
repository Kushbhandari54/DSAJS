let arr = [1, 2, 3, 4, 5, 6];

let filterArray = arr.filter((item) => item % 2 == 0); // even number

Array.prototype.customFilter = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

let evenNumber = arr.customFilter((item) => item % 2 == 0);
console.log("Filter Array", filterArray);
console.log("Custom filter Array", evenNumber);
