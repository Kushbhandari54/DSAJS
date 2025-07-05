var thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num === first || num === second || num === third) continue;
    if (nums[i] > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = nums[i];
    } else if (num > third) {
      third = num;
    }
  }
  console.log(first, third, second);
  return third === -Infinity ? first : third;
};
console.log(thirdMax([1, 2, 3]));
