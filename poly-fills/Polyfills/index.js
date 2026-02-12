function customSetInterval(fn, delay, ...args) {
  let timerId;
  function tick() {
    timerId = setTimeout(() => {
      fn(...args);
      tick();
    }, delay);
  }
  tick();
  return {
    clear() {
      clearTimeout(timerId);
    },
  };
}

const displayName = (name) => {
  console.log(`My name is ${name}`);
};
const interVal = customSetInterval(displayName, 1000, "kush");
setTimeout(() => interVal.clear(), 5000);
