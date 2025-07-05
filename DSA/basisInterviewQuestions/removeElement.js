var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    }
  }

  let slowPtr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[slowPtr] === "_" && nums[i] !== "_") {
      [nums[slowPtr], nums[i]] = [nums[i], nums[slowPtr]];
      slowPtr += 1;
    } else if (nums[slowPtr] !== "_") {
      slowPtr += 1;
    }
  }
  return nums.slice(0, slowPtr);
};

console.log(removeElement([2], 3));
