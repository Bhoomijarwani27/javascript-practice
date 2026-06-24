let someNum = 33

let stringNum = String(someNum); // convert number to string
console.log(typeof stringNum); // string
console.log(stringNum); // "33"

// ****************operation******************

let value = 3
let negValue = -value; // negation operation
console.log(negValue); // -3

console.log(3 + 2); // addition operation
console.log(3 - 2); // subtraction operation
console.log(3 * 2); // multiplication operation
console.log(3 / 2); // division operation
console.log(3 % 2); // modulus operation

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2
console.log(str1 + " " + str2); // concatenation operation
console.log(str3); // concatenation operation

console.log(2 + "2"+1); // 221
console.log(2 + 2 + "1"); // 41
console.log("2" + 2 + 1); // 221

console.log(true);  // true
console.log(+true); // 1
//console.log(true+); // error due to syntax error
console.log(false); // false
console.log(+false); // 0
//console.log(false+); // error due to syntax error
console.log(+""); // 0

let value1 = 3
value1++; // increment operation
console.log(value1); // 4
++value1; // increment
console.log(value1); // 5

let value2 = 3
value2--;
console.log(value2); // 2

// same data type comparison
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// different data type comparison
console.log(2 > "1"); // true
console.log(2 < "1"); // false
console.log(2 >= "1"); // true
console.log(2 <= "1"); // false
console.log(2 == "1"); // false
console.log(2 != "1"); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === strict equality operator
console.log(2 === 2); // true
console.log(2 === "2"); // false

