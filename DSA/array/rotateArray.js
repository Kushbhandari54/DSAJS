var rotate = function (nums, k) {
  console.log(nums.len);
  k = k % nums.length;

  if (k == 0) {
    return nums;
  }
  let firstArray = nums.slice(0, k + 1);
  let secondArray = nums.slice(k + 1, nums.length);

  return [...secondArray, ...firstArray];
};

console.log(rotate([-1, -100, 3, 99], 2));
