let arr = [1, 2, 3, 4, 5];
console.log(arr);
const myheros = ["spiderman", "ironman", "thor", "hulk"];
console.log(myheros);
console.log(typeof myheros);
console.log(myheros[0]);

arr.push(6); // it add 6 at the end of the array
console.log(arr);

arr.pop(); // it remove last element from the array
console.log(arr);

arr.unshift(0); // it add 0 at the start of the array
console.log(arr);

arr.shift(); // it remove first element from the array
console.log(arr);

console.log(arr.includes(3)); // it check if 3 is present in the array or not
console.log(arr.indexOf(3)); // it return the index of 3 in the array

const newArr = arr.join()
console.log(newArr); // it convert array into string

//slice and splice method
 const myn1 = arr.slice(1, 4); // it return a new array from index 1 to index 4 (not including index 4)
 console.log(myn1);
 console.log(arr); // it will show the original array as slice does not modify the original array
const myn2 = arr.splice(1, 3); // it remove 3 elements from index 1 and return the removed elements
console.log(myn2); // it will show the removed elements
console.log(arr); // it will show the modified array after splice

const marvelHeros = ["spiderman", "ironman", "thor", "hulk"];
const dcHeros = ["batman", "superman", "flash", "aquaman"];

// marvelHeros.push(dcHeros); // it add dcHeros array at the end of marvelHeros array
// console.log(marvelHeros); // it will show the marvelHeros array with dcHeros array at the end

// console.log(marvelHeros[4][0]); // it will take array as one element and show the first element of dcHeros array

 const allHeros = marvelHeros.concat(dcHeros); // it will merge both arrays and return a new array without modifying the original arrays
console.log(allHeros); 

const heros = [...marvelHeros,...dcHeros]; // it will merge both arrays and return a new array without modifying the original arrays
console.log(heros);  // 

const another_arr =[1,2,3,[4,5],6,7,[8,9]]; // it is a nested array
console.log(another_arr[3][0]); // 4 

const  real_another_arr = another_arr.flat(); // it will flatten the nested array and return a new array
console.log(real_another_arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.isArray("hello")); // it will check array or not and return boolean value
console.log(Array.from("hello")); // it will convert string into array and return a new array
console.log(Array.from({name: "john"}));// [] give empty array because not said earlier that we want to convert object into array it is has key value pair so it will not convert into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // it will convert the values into array and return a new array
