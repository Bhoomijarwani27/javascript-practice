// for loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}
    // while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do while loop
let k = 0;
do {
    console.log(k);
    k++;
}while (k < 5);

// for...in loop
const person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
