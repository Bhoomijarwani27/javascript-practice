let score = 33

console.log(typeof score); //number
 let scoreString = String(score); //convert number to string
console.log(typeof scoreString); //string
console.log(scoreString); // "33"

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33
let value = "33ab"
let valueInNumber2 = Number(value);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN = Not a Number
let zero = 0;;
let valueInBoolean = Boolean(zero);
console.log(typeof valueInBoolean); // boolean
console.log(valueInBoolean); // false
let novalue = null
console.log(typeof novalue);// object or 0 
// "33" => 33
// "name" => NaN  in string to number conversion if string is not a valid number it will return NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN
