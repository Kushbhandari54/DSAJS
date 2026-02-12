let arr = [1, 2, [3, 4, [5, 6, [7]]]];
// 1 2 3 4 5 6 7
let output = [];
Array.prototype.customFlatten = function () {
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      this[i].customFlatten();
    } else {
      output.push(this[i]);
    }
  }
};

arr.customFlatten();
console.log("Output", output);
