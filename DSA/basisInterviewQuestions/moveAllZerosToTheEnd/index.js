let array = [0, 3, 4, 5, 0, 3, 0, 3, 5, 0];
// Move all zeros to the end without external space.

// ===============Two Pointer======================Approach 1 ============Order Changes of array
// let ptr1 = 0;
// let ptr2 = array.length - 1;

// while (ptr1 <= ptr2) {
//   if (array[ptr1] === 0 && array[ptr2] !== 0) {
//     [array[ptr1], array[ptr2]] = [array[ptr2], array[ptr1]];
//     ptr1 += 1;
//     ptr2 -= 1;
//   } else if (array[ptr1] !== 0) {
//     ptr1 += 1;
//   } else {
//     ptr2 -= 1;
//   }
// }

// console.log("Final Array is:", array);

// ========================================Approach 2 =============================================
// Two Ptr
let firstPtr = 0;
let secondPtr = 1;

while (secondPtr < array.length) {
  if (array[firstPtr] === 0 && array[secondPtr] !== 0) {
    [array[firstPtr], array[secondPtr]] = [array[secondPtr], array[firstPtr]];
    firstPtr += 1;
    secondPtr += 1;
  } else if (array[firstPtr] !== 0) {
    firstPtr += 1;
    secondPtr += 1;
  } else {
    secondPtr += 1;
  }
}

console.log("Final Output with approach 2", array);
