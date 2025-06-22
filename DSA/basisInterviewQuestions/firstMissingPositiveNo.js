let input = [3, 4, -1, 1];

// ==================================O(N2) Approach ==================================
function firstMissingPositiveNo(input) {
  let length = input.length;
  let i = 0;
  for (let i = 1; i <= length; i++) {
    if (!input.includes(i)) {
      return i;
    }
  }
}

console.log("The first missing element is", firstMissingPositiveNo(input));
// =====================================================================================

//===================================O(N) Approach =====================================

function firstMissingPositiveNo(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log("The first missing element is", firstMissingPositiveNo(input)); // → 2
