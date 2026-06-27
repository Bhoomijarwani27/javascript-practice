const myobj = new Object(); // another way to create an object

myobj.name = "mark";
myobj.age = 30;
myobj.location = "New York";
myobj.email = "mark@example.com";

console.log(myobj); // show the object with all properties 
const myobj2 =  {
    fullname: {
        username: {
            firstname: "John",
            lastname: "Doe"
        }

    }
}

console.log(myobj2); // show the second object with all properties 
console.log(myobj2.fullname.username.firstname); // access the nested property firstname

// marging objects 
const obj1 ={1: "one", 2: "two"};
const obj2 ={3: "three", 4: "four"};  
const obj3 = {obj1, obj2}; // it will show one obj inside another obj like in array as element
console.log(obj3); 
const mergedObj = {...obj1, ...obj2}; // using spread operator to merge two objects
console.log(mergedObj); // show the merged object with all properties from obj1 and obj2

const obj4 = Object.assign( {}, obj1, obj2); //this will create a new object and merge obj1 and obj2 into it without modifying the original objects
console.log(obj4); // show the merged object with all properties from obj1 and obj2

const obj5 = Object.assign( obj1, obj2); // using Object.assign() to merge two objects, but this will modify obj1
console.log(obj5);

// array of objects mostly used in real world applications like user data, product data, etc.
const users = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Mark", age: 35}
];
console.log(users); // show the array of objects
console.log(users[0].age); // show the age of the first user

console.log(Object.keys(myobj)); // show the keys of the object
console.log(Object.values(myobj)); // show the values of the object
console.log(Object.entries(myobj)); // show the entries of the object as an array of arrays
console.log(myobj.hasOwnProperty("number")); // check if the object has a property 


const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseInstructor: "John Doe",   
    price: 1000,
}

const {courseInstructor : instructor, courseName, price} = course; // destructuring the object
console.log(instructor);
console.log(courseName);
console.log(price);

