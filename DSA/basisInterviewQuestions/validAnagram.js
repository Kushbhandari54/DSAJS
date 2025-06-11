let s = "kush",
  t = "shuk";
// ===============================================Approach 1 =================================

function validAnagram(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();

  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }
  return true;
}

console.log("Valid Anagram", validAnagram(s, t));

// =================================================Approach 2

function isValidAnagram(s, t) {
  let obj1 = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let char of s) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of t) {
    if (!obj1[char]) return false;
    obj1[char] -= 1;
  }
  return true;
}

console.log(isValidAnagram(s, t));
