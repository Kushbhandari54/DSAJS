async function name(params) {
  return setTimeout(() => {
    return "Hello " + params;
  }, 3000);
}

console.log(name("kush"));
