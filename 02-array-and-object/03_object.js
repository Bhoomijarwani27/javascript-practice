// singleton - an object that is created only once and can be used throughout the application

// object literal - a way to create an object using curly braces {}
const mysym =Symbol("key1");
const myObj = { 
    name: 'John',
    "full name" : 'John Doe', // property name with space 
    mysym : "mykey1", // property name with symbol
    age: 30,
    location: 'New York',
    email: 'john@example.com',
    isloggedIn: false,
    lastlogindays: ["monday", "saturday"]
};

//console.log(myObj()); // This will throw an error because myObj is not a function, it's an object.
console.log(myObj.name); 
console.log(myObj.age);
console.log(myObj["email"]); // another way 
console.log(myObj["full name"]); // full name only acessed using bracket notation because it has a space in the property name
console.log(myObj[mysym]); // undefined
console.log(myObj.mysym);
 // access property with symbol key using dot notation
 console.log(typeof myObj.mysym); // string

myObj.greeting = function() {
    console.log("hello");
}

console.log(myObj.greeting()); // hello undefined because the function does not return anything, it returns undefined
console.log(myObj.greeting);  // [function: (anonymous)]
myObj.askage = function() {
     console.log(`my age is ${this.age}`);
}
myObj.askage();

