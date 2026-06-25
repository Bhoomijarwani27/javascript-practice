const score = 100;
console.log(score); // 100

const balance = new Number(100);
console.log(balance);// [Number: 100] // it give property of number in browser console

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const othernum = 123.8966

console.log(othernum.toPrecision(3)); // 124
console.log(othernum.toPrecision(4)); // 123.9

const hundred = 100000;

console.log(hundred.toLocaleString('en-IN')); // 1,00,000 


//+++++++++++++++Math+++++++++++++++++++++++

console.log(Math);// it give all the properties of math in browser console
console.log(Math.abs(-100)); // 100
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.random()); // it give random number between 0 to 1
console.log(Math.random() * 10); // it give random number between 0 to 10// it can give 0.5676976758
console.log(Math.random() * 10 + 1 ); // it give random number between 1 to 10  it can give 1.5676976758
console.log(Math.floor(Math.random() * 10+1)); // it give random number between 1 to 10 it also give integer number like 1 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min); // it give random number between 10 to 20




