// write a function// call so that
// calc(2).add(3).sub(2).add(5).mul(3).add(1).sub(3).value()
// should return 22

// calc(20).div(5).add(27).sub(5).mul(4).value()
// should return 104

// Same can be done with recursion
function calc(value) {
  let current = value;
  return {
    add(b) {
      current += b;
      return this;
    },
    sub(b) {
      current -= b;
      return this;
    },
    mul(b) {
      current *= b;
      return this;
    },
    div(b) {
      current /= b;
      return this;
    },
    value() {
      return current;
    },
  };
}
console.log(
  "Result",
  calc(2).add(3).sub(2).add(5).mul(3).add(1).sub(3).value(),
);
// should return 22
