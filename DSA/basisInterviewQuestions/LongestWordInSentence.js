let inputString = "Frontend interviews are intense";
// "interviews"

function longestWordInSentence(inputString) {
  let inputArray = inputString.split(" ");
  let max = 0;
  let string = "";
  inputArray.forEach((item) => {
    if (item.length > max) {
      max = item.length;
      string = item;
    }
  });
  return string;
}

console.log("Output", longestWordInSentence(inputString));
