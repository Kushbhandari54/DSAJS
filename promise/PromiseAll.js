let promise1 = Promise((res, rej) => res(10));
let promise2 = Promise((res, rej) => res(20));
let promise3 = Promise((res, rej) => rej(30));

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

// Promise.all
// Runs multiple promises in parallel
// Resolves when all promises resolved
// Reject immediately when any promise reject
// syntax: Promise.all([p1,p2,p3])

// If one promise fails, others are not cancelled, but their results are ignored.
