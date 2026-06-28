 function greet(name) {
    console.log(`Hello, ${name}!`);
};
greet("Alice"); // Hello, Alice!
greet("Bob");

function add(a, b) {
    console.log(a + b);
}
add(5, 3); // 8
add(10, "20"); //1020 
add(7); // NaN (Not a Number) because b is undefined
add(6, null); // 6 (null is treated as 0 in addition)
add(4,5,6); // 9 only first two arguments are considered, the rest are ignored

function multiply(a, b) {
    let result = a * b;
    return result;
    console.log("This line will not be executed because it's after the return statement.");
}

const product = multiply(4, 5);
console.log(product); // 20

function nightGreeting(name) {
    return `Good night, ${name}!`;
}       
 console.log(nightGreeting("Charlie"));
 console.log(nightGreeting()); // Good night, undefined! (name is undefined because no argument was passed)

// using if else 
function movieticket(name, age) {
    if (name === undefined || age === undefined) {
        return "Please provide both name and age.";
    }   
    if (age < 18) {
        return `Sorry ${name}, you are not allowed to watch this movie.`;
    }
    return `Welcome ${name}, enjoy the movie!`;
}
console.log(movieticket("David", 20));
console.log(movieticket("Eve", 16));
console.log(movieticket("Frank"));

// default parameters
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetWithDefault(); // Hello, Guest!
greetWithDefault("Alice"); // Hello, Alice!

// shopping cart example
function calculateTotalPrice(...num) {
    return num
}

console.log(calculateTotalPrice(10, 20, 30)); // [10, 20, 30]   

// with objects
const user= {
    username: "JohnDoe",
    price: 100
}

function  handleobject(anyobject) {
    console.log(`Username: ${anyobject.username}, Price: ${anyobject.price}`);
}
handleobject(user); 
handleobject({username: "JaneDoe", price: 200});

// Array example
const myArray = [1, 2, 3, 4, 5];
function sumArray(getArray) {
    return getArray[0]
}
console.log(sumArray(myArray)); // 1
console.log(sumArray([10, 20, 30])); // 10

    