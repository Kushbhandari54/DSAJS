let inputArray = [1, -1, 3, 2, -7, -5, 11, 6];

function moveNegativeToBeginning(inputArray) {
  let firstPtr = 0;
  let secondPtr = 1;
  while (secondPtr < inputArray.length) {
    if (inputArray[firstPtr] > 0 && inputArray[secondPtr] < 0) {
      [inputArray[firstPtr], inputArray[secondPtr]] = [
        inputArray[secondPtr],
        inputArray[firstPtr],
      ];
      firstPtr += 1;
      secondPtr += 1;
    } else if (inputArray[firstPtr] < 0) {
      firstPtr += 1;
      secondPtr += 1;
    } else {
      secondPtr += 1;
    }
  }
  return inputArray;
}

console.log("Output:", moveNegativeToBeginning(inputArray));
