function calculateResult(initialValue) {
  let value = initialValue;
  function sum(a) {
    value += a;
    return calculateResult(value);
  }
  function sub(a) {
    value -= a;
    return calculateResult(value);
  }
  function mul(a) {
    value *= a;
    return calculateResult(value);
  }
  function display() {
    return value;
  }

  return {
    sum,
    sub,
    mul,
    display,
  };
}

console.log(calculateResult(50).sum(10).sub(5).mul(1).display());
