let s = "ctoyjrwtngqwt",
  k = 8,
  fill = "n";

function partString(value, k, fill) {
  let newValue = value.join("");
  if (newValue.length !== k) {
    let newString = fill.repeat(k - newValue.length);
    return newValue + newString;
  }
  return newValue;
}

var divideString = function (s, k, fill) {
  let newArray = s.split("");
  let first = 0;
  let last = k;
  let output = [];
  while (first < s.length) {
    output.push(partString(newArray.slice(first, last), k, fill));
    first = last;
    last += k;
  }
  return output;
};

console.log(divideString(s, k, fill));
