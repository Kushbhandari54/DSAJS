// Find the missing number;
let array1 = [1, 2, 3, 6, 7];
let flag = false;
let value = [];
for (let i = 0; i < array1.length - 1; i++) {
  if (array1[i] + 1 !== array1[i + 1]) {
    flag = true;
    value.push(array1[i] + 1);
  }
}
if (!flag) {
  console.log("No Missing Number");
} else {
  console.log("Missing number is :", value.join(","));
}
