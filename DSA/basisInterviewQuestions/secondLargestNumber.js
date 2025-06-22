let input = [10, 10, 5];
// output=10;

// function secondLargestNumber(input) {
//   let inputArray = [...input];
//   let maxNumber = Math.max(...inputArray);
//   let newInputArray = inputArray.filter((item) => item !== maxNumber);

//   if (newInputArray.length === 0) {
//     return null;
//   }

//   return Math.max(...newInputArray);
// }

// console.log("Second Largest Number is:", secondLargestNumber(input));

// -------------------------------------------Alternate Apporoach-----------------------------------
let maxElement = null;
let secondMax = null;
for (let i = 0; i < input.length; i++) {
  if (input[i] > maxElement) {
    maxElement = input[i];
  }
}
for (let i = 0; i < input.length; i++) {
  if (maxElement > input[i] && input[i] > secondMax) {
    secondMax = input[i];
  }
}

console.log("Second Largest Number is:", secondMax);

//---------------------------------------------------------------------------------------------------

function secondMax(input) {
  if (input.length < 2) {
    return null;
  }
  let maxNumber = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < input.length; i++) {
    let num = input[i];

    if (num > max) {
      secondMax = maxNumber;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}

console.log("Second Largest Number is:", findSecondLargest(input));
