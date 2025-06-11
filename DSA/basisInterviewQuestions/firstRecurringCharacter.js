let input = [1, 1];
// Output: 2

function firstRecurringElement(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]]) {
      return input[i];
    } else {
      obj[input[i]] = 1;
    }
  }
  return null;
}

console.log("The first recurring character is :", firstRecurringElement(input));
