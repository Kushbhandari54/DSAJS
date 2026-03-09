function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

let closure = find();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("15");
closure(15);
console.timeEnd("15");

// 36
// 6: 11.761ms
// 225
// 15: 7.952ms

// 36
// 6: 3.015ms
// 225
// 15: 0.083ms
