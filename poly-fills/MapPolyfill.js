let array = [1, 2, 3, 4, 5];
let newArray = array.map((item) => {
  return item * 2;
});

Array.prototype.customMap = function (fn) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(fn(this[i]));
  }
  return output;
};

console.log(
  array.customMap((item) => {
    return item * 2;
  })
);
console.log(newArray);
