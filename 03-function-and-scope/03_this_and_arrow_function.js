const user = {
  username: "John",
  price: 3000,

  welcomeMessage: function() {
    console.log(`Welcome, ${this.username}!`);
  }

}

user.welcomeMessage(); // Output: Welcome, John!
user.welcomeMessage("sam"); // Output: Welcome, John!
user.username = "sam";
user.welcomeMessage(); // Output: Welcome, sam!
console.log(this); //{}

function chai(){
    console.log(this);
}
chai(); // Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 
// arrow function 
const tea = () => {
    console.log(this);
}
tea(); // {}

const addtwo = (a, b) =>  a + b;
// if you use curly braces, you need to use return statement
// (a,b) / a + b this no need to use return statement
 
console.log(addtwo(2, 3)); // Output: 5

// for object
const user1 = (username) => ({username: username});
console.log(user1.username); // Output: undefined

// for object need {} and return statement need 
const user2 = (username) => {
    return {username: username};
}   
console.log(user2("John").username); // Output: John

// array 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});  // output: 1
            //  2 
            //  3
            //  4 
            //  5
