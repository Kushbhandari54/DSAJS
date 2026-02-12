var findSubarrays = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length - 1; i++) {
    obj[`${nums[i]}${nums[i + 1]}`] = nums[i] + nums[i + 1];
  }
  let value = Object.values(obj);
  return value.length !== new Set(value).size;
};

console.log(findSubarrays([4, 2, 4]), "Sub Array");
