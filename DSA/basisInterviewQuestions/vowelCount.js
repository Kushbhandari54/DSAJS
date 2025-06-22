let input = "The quick brown fox";
let countFirst = 0;
input.split("").forEach((item) => {
  if (
    item.toLowerCase() === "a" ||
    item.toLowerCase() === "e" ||
    item.toLowerCase() === "i" ||
    item.toLowerCase() === "o" ||
    item.toLowerCase() === "u"
  ) {
    countFirst += 1;
  }
});
console.log(countFirst, "Count");

// output:5
const VOWEL = ["a", "e", "i", "o", "u"];

// ================================================O(N) Time , O(1) Space Complexity===================
function stringContainVowel(string) {
  let count = 0;
  string.split("").forEach((item) => {
    if (VOWEL.includes(item)) {
      count += 1;
    }
  });
  return count;
}

function vowelCount(input) {
  let vowelCount = 0;
  input.split(" ").forEach((item) => {
    vowelCount += stringContainVowel(item);
  });
  return vowelCount;
}

console.log("Vowel Count", vowelCount(input));
