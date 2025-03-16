// A pure function
// Always produces  the same output for the same input.
// Does not modify external state

// Example:
const square = (x) => x * x;
console.log(square(5));

// Not a pure function
let count = 0;
const increment = () => count++;

// =============================================================================================
// Higher Order Functions
// A higher order function:
// Takes  a function as an argument Or return a function.

// Example:
const number = [1, 2, 3, 4, 6];
const result = number.map((num) => num * 2);
const multiply = (factor) => (num) => num * factor;
const triple = multiply(3);
console.log(triple(5)); // 15

// ============================================================================================
// Immutability

// Bad Approach
let array2 = [1, 2, 3];
array2.push(4);

// Immutable Approach
const array3 = [1, 2, 3];
const newArr = [...array3, 4];
console.log(newArr);

// ============================================================================================

// Recursion (Replacing Loops with Function Calls)
// A function calls itself instead of using loops.
// Example: factorial

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
factorial(5);

// ==============================================================================================

// Function Composition (Combining Functions)
// We can compose functions together to build complex logic.

// Example function composition:

const sum = (a, b) => a + b;
const mulby2 = (result) => result * 2;

const compose = (f, g) => (a, b) => f(g(a, b));
const addThenSub = compose(mulby2, sum);

console.log(addThenSub(2, 3));
