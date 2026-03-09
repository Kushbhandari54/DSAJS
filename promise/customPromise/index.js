function MyPromise(executor) {
  let state = "PENDING";
  let value;
  let handlers = [];

  function resolve(result) {
    if (state !== "PENDING") return;
    state = "FULFILLED";
    value = result;
    handlers.forEach((h) => h.onFulfilled(value));
  }

  function reject(error) {
    if (state !== "PENDING") return;
    state = "REJECTED";
    value = error;
    handlers.forEach((h) => h.onRejected(value));
  }

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolveNext, rejectNext) => {
      handlers.push({
        onFulfilled: (val) => {
          try {
            resolveNext(onFulfilled ? onFulfilled(val) : val);
          } catch (e) {
            rejectNext(e);
          }
        },
        onRejected: (err) => {
          if (onRejected) {
            try {
              resolveNext(onRejected(err));
            } catch (e) {
              rejectNext(e);
            }
          } else {
            rejectNext(err);
          }
        },
      });
    });
  };

  executor(resolve, reject);
}
