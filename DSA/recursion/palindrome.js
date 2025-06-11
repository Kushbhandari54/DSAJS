// Check wether a number is palindrome of not

function checkPalindrome(n) {
  let array = n.split("");
  let array2 = n.split("").reverse();
  console.log(array, array2);

  let flag = true;
  array.map((item, index) => {
    if (item !== array2[index]) {
      flag = false;
    }
  });

  return flag;
}

console.log(checkPalindrome("121"));
