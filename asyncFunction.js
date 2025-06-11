async function name(params, callback) {
  return setTimeout(() => {
    return callback("Hello " + params);
  }, 3000);
}

name("World", (result) => {
  console.log(result);
});
