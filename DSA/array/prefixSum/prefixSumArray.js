// Given an array arr[] of size n, the task is to find the prefix sum of the array.
//  A prefix sum array is another array prefixSum[] of the same size,
//  such that prefixSum[i] is arr[0] + arr[1] + arr[2] . . . arr[i].

// let arr = [10, 20, 10, 5, 15];
// Output: 10 30 40 45 60

// ==============================================Approach 1+++++++++++++++++++++++++++++++++++++++++++
// let totalSum = arr.reduce((acc, curr) => acc + curr);
// let output = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   output.push(totalSum);
//   totalSum -= arr[i];
// }

// console.log(output.reverse());
// ==================================================Approach 2========================================
// A better approach is to use a single loop to calculate the prefix sum array.

let arr = [10, 20, 10, 5, 15];
// Output: 10 30 40 45 60

let output = [];
let sum = arr[0];
for (let i = 1; i <= arr.length; i++) {
  output.push(sum);
  sum += arr[i];
}

console.log(output, "Output");
