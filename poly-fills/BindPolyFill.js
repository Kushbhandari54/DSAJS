function displayName(age) {
  return `My name is ${this.name} and my age is ${age}`;
}
let obj1 = {
  name: "Kush",
};
let obj2 = {
  name: "Ankit",
};

Function.prototype.myBind = function (obj1) {
  return (...args) => {
    return this.call(obj1, ...args);
  };
};

let result = displayName.myBind(obj1);
console.log(result(25));
