// 🔹 Input: An array of n distinct numbers in the range 0 to n.
// 🔹 Output: Return the one number that is missing from the array.

let input = [2, 0, 1];
// output=2

function missingNo(input) {
  let maxDigit = input.length;
  for (i = 0; i <= maxDigit; i++) {
    if (!input.includes(i)) {
      return i;
    }
  }
}
console.log("The Missing Number is", missingNo(input));

// =======================================Optimized way=========================================

function missingNoOptimized(input) {
  let n = input.length;
  let sumInput = input.reduce((acc, curr) => acc + curr, 0);
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sumInput;
}

console.log("Optimized Way and missing No. is", missingNoOptimized(input));
