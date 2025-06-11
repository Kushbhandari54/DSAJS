function firstNonRepeatingChar(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbcdeff")); // "c"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("xxyz")); // "y"
