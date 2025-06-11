//

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.reduce((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      return acc.concat(flattenArray(currentValue));
    } else {
      return acc.concat(currentValue);
    }
  }, []);
}

console.log(flattenArray([[[[1, 2]]], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]
