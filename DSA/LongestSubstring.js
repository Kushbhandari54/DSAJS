function longestUniqueSubstr(str) {
  let n = str.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let newArr = new Array(26).fill(false);
    for (let j = i; j < n; j++) {
      if (newArr[s.charCodeAt(j) - "a".charCodeAt(0)] === true) {
        break;
      } else {
        res = Math.max(res, j - i + 1);
        newArr[s.charCodeAt(j) - "a".charCodeAt(0)] = true;
      }
    }
  }
  return res;
}

let s = "geeksforgeeks";
console.log(longestUniqueSubstr(s));
