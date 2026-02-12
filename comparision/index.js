// 0 == false            // true      (loose equality, type coercion)
// 0 === false           // false     (strict equality, different types)
// 1 == "1"              // true      (string converted to number)
// 1 === "1"             // false     (different types)
// null == undefined     // true      (special case)
// null === undefined    // false     (different types)
// '0' == false          // true      ('0' is converted to 0)
// '0' === false         // false     (different types)
// NaN == NaN            // false     (NaN is never equal to itself)
// NaN === NaN           // false
// [] == []              // false     (different array objects)
// [] === []             // false
// {} == {}              // false     (different object references)
// {} === {}             // false
