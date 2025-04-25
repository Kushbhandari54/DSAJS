let person1 = {
  firstName: "Kush",
  lastName: "Bhandari",
};

let getPersonDetails = function (age, hobby) {
  return `${this.firstName} ${this.lastName} and ${age} , hobby: ${hobby}`;
};

let person2 = {
  firstName: "Ram",
  lastName: "Sharan",
};

console.log(getPersonDetails.call(person1, 24, "Badminton"));
console.log(getPersonDetails.call(person2, 25, "Hiking"));

// apply is similar to call just we pass parameter to the function as a array
console.log(getPersonDetails.apply(person2, [25, "Chess"]));

// Bind return a callback function which can be called later
let personDetail = getPersonDetails.bind(person2);

console.log(personDetail(25, "Online Gaming"));
