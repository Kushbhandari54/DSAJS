// Find the longest substring with no repeating characters.
let inputString = "aasdkjaksdj";

function longestSubString(inputString) {
  let start = 0;
  let maxLength = 0;
  let newSet = new Set();
  for (let i = 0; i < inputString.length; i++) {
    while (newSet.has(inputString[i])) {
      newSet.delete(inputString[start]);
      start++;
    }
    newSet.add(inputString[i]);
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(longestSubString(inputString), "Longest");
