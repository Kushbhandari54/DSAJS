function rotateArr(arr, d) {
  let n = arr.length;
  let rotationCount = d > n ? d % n : d;
  while (rotationCount > 0) {
    let temp = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
    rotationCount--;
  }
  return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2));
