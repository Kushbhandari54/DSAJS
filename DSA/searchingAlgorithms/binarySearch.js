// Binary search work on the priciple that the given array should be already sorted
// Best case Omega(1)
// Average, worst case O(log n)
let array1 = [1, 10, 12, 14, 20, 25];
let itemToSearch = 30;
let i = 0;
let j = array1.length - 1;
let flag = false;
while (i <= j) {
  let mid = Math.floor((i + j) / 2);
  if (array1[mid] === itemToSearch) {
    console.log(`Item found at index ${mid}`);
    flag = true;
    break;
  } else if (array1[mid] > itemToSearch) {
    j = mid - 1;
  } else {
    i = mid + 1;
  }
}

if (!flag) {
  console.log(`Item doesn't Exist!`);
}
