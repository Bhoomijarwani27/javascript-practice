// primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// non-primitive data types / reference data types
// 1. Object
// 2. Array
// 3. Function

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//For example, in JavaScript, you can do the following:

//let x = 10; // x is now a number


// +++++++++++ stack and heap memory +++++++++++
// stack (primitive data types) and heap (non-primitive data types) are two different areas of memory used for storing data in a program

// in stack get copy of the value and store it in another variable, so if we change the value of one variable it will not affect the other variable

// in heap get reference of the value and store it in another variable, so if we change the value of one variable it will affect the other variable
let myyourName = "John"; // stored in stack memory
let anotherName = myyourName; // anotherName is a copy of myyourName, also stored in stack memory

console.log(myyourName); // "John"
console.log(anotherName); // "John"

anotherName = "Jane"; // change the value of anotherName
console.log(anotherName); // "Jane"
console.log(myyourName); // "John" (myyourName is unaffected)

let myPerson = { name: "John", age: 30 }; // stored in heap memory
let anotherPerson = myPerson; 


console.log(myPerson); // { name: "John", age: 30 }
console.log(anotherPerson); // { name: "John", age: 30 }

anotherPerson.name = "Jane"; // change the name property of anotherPerson
console.log(anotherPerson); // { name: "Jane", age: 30 }
console.log(myPerson); // { name: "Jane", age: 30 } (myPerson is affected because both variables reference the same object in heap memory)