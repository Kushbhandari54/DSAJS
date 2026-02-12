var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i] - target);
    if (obj[value] && i !== obj[value]) {
      return [i, obj[value]];
    }
  }
};
let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
