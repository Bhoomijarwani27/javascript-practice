// break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit the loop when i is 5
    }
    console.log(i);
}
 // continue statement
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip the rest of the loop when i is even
    }
    console.log(i);
}

// return statement
function add(a, b) {
    return a + b; // return the sum of a and b
}
add(5, 3); // returns 8
// throw statement
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero"); // throw an error if b is 0
    }
    return a / b; // return the result of a divided by b
}

// try...catch statement
try {
    divide(5, 0); // this will throw an error
} catch (error) {
    console.error(error.message); // catch the error and log the message
}
// finally statement
try {
    divide(5, 0); // this will throw an error   
} catch (error) {
    console.error(error.message); // catch the error and log the message
}
finally {
    console.log("Finally block executed"); // this will always execute
}   

