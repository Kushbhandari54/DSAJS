// Task is to return a array from range of numbers

function rangeOfNumber(start, end) {
  if (end < start) {
    return [];
  }
  let output = rangeOfNumber(start, end - 1);
  output.push(end);
  return output;
}

console.log(rangeOfNumber(1, 5));
