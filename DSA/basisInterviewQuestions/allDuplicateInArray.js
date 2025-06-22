let nums = [4, 3, 2, 7, 8, 2, 3, 1];
output = [2, 3];

function allDuplicateArray(nums) {
  let obj = {};
  nums.forEach((item) => {
    if (obj[item]) obj[item] += 1;
    else obj[item] = 1;
  });
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value > 1) {
        return key * 1;
      }
    })
    .filter((item) => item);
}

console.log(allDuplicateArray(nums));

// ===========================================Alternative Better Approach===============================

function findDuplicateArray(nums) {
  let obj = {};
  let output = [];
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
    if (obj[num] === 2) {
      output.push(num);
    }
  }
  return output;
}
console.log("All Duplicate values are", findDuplicateArray(nums));
