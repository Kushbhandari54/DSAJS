// CallBack:
// A callback function is a function that is passed as an argument to another function and
//  is intended to be executed later, usually after some kind of operation (like I/O, API call,
//  or a specific event).

// In JavaScript, callbacks are heavily used for asynchronous operations, especially before
// Promises and async/await became mainstream. They’re also used in higher-order functions
//  (e.g., Array.prototype.map, filter, forEach), and in event handling.

// There are two types of callbacks:
// Synchronous (like in array.map() — executed immediately)
// Asynchronous (like in setTimeout() or API calls — executed later)

function getStatus(callback) {
  // Simulate async operation
  setTimeout(() => {
    console.log("Fetching status...");
    callback("Status: Active");
  }, 1000);
}

function showStatus(status) {
  console.log("Callback received:", status);
}

getStatus(showStatus);

// Callback Hell / Pyramid of Doom: When callbacks are nested too deeply, code becomes hard to read and maintain.

doTask1(function (result1) {
  doTask2(result1, function (result2) {
    doTask3(result2, function (result3) {
      // and so on...
    });
  });
});
// 🔄 Mitigation: Use Promises or async/await.

// Error-First Callbacks (Node.js Style):
function fetchData(callback) {
  const error = null;
  const data = { name: "Kush" };
  callback(error, data);
}

fetchData((err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Result:", result);
  }
});

// 🧠 Interview Questions (Advanced Level)
// 1. What is a callback in JavaScript? How is it different from a Promise?
// A callback is a function passed into another function to run after the first function completes. A Promise represents the result of an asynchronous operation and avoids issues like callback hell by chaining with .then() and catch().

// 2. What are some downsides of callbacks in JavaScript?
// Callback Hell or doom of pyramid (deep nesting)

// What is inversion of control?
// Inversion of control means we are giving the control of our code to a another function which can do errors like not calling our callback, or
// calling it twice. we actually host the control of the function

// for example
let card = ["shoes"];

function AddtoCart(cartItems, callback) {
  console.log("Items in cart:", cartItems);
  callback();
}

AddtoCart(card, function () {
  console.log("Proceed to payment");
});

// Difficult to handle errors cleanly

// Harder to read and maintain

// No built-in return value or try-catch like synchronous code

// 3. What is the difference between synchronous and asynchronous callbacks?
// Synchronous: Executes immediately (e.g., array.map())

// Asynchronous: Executes later (e.g., setTimeout, file reading, API calls)

// 4. Can you convert a callback-based function to return a Promise?

function getUserData(callback) {
  setTimeout(() => callback(null, { id: 1, name: "Kush" }), 1000);
}

// Convert it:
function getUserDataPromise() {
  return new Promise((resolve, reject) => {
    getUserData((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// 5. What is callback hell and how can you resolve it?
// It’s a situation where callbacks are nested within callbacks, making the code hard to read. Solved by using:

// Promises

// async/await

// Modularizing code into smaller functions
