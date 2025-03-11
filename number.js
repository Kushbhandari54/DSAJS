let value = Number("124abc");
let value1 = parseInt("124abc");

console.log(value); // Will result in NaN
console.log(value1); // will result in 124

// The Number() function in JavaScript attempts to convert its argument to a number.
//  If the entire string can be successfully parsed as a number, it returns that number.
// However, if there are any non-numeric characters (except for leading or trailing whitespace), it returns NaN (Not-a-Number).
//  In this case, '123abc' contains non-numeric characters, so Number('123abc') returns NaN.
//  This behavior is different from parseInt(), which would return 123 as it stops parsing at the first non-numeric character.
