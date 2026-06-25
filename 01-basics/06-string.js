const name = "johne-doe"
const repoCount = 50

console.log(name + repoCount + " value "); //  johne-doe50 value
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // hello my name is johne-doe and my repo count is 50


const  gameName = new String("pubg")
console.log(gameName);

console.log(gameName[0]); // p
console.log(gameName.length); // 4
console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …} // in terminal it will give {}

console.log(gameName.toUpperCase()); // PUBG 
console.log(gameName.toLowerCase()); // pubg
console.log(gameName.charAt(2)); // b
console.log(gameName.indexOf("g")); // 3

console.log(name.length);
const newstring = name.substring(0,3) 
console.log(newstring); // joh

const anotherString = name.slice(-8 , 4) // -8 means from the end of the string and 4 means till the 4th index
// in slice method the first parameter is the starting index and the second parameter is the ending index. If the first parameter is negative then it will start from the end of the string and if the second parameter is negative then it will end at that index from the end of the string.

// in slice negative allow but in substring negative is not allowed.
console.log(anotherString);

const newString2 = name.replace("johne", "john") // it will replace the first occurrence of the string
console.log(newString2); // john-doe    

const newString3 =  "    hello world     "
console.log(newString3); //     hello world     
console.log(newString3.trim()); // hello world
console.log(newString3.trimStart()); // hello world
console.log(newString3.trimEnd()); //     hello world

const url = "https://www.john.com"
console.log(url.replace("john", "jane")); // https://www.jane.com

console.log(url.includes("john")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith("com")); // true

const newString4 = "hello-world-this-is-john"
console.log(newString4.split("-")); // ["hello", "world", "this", "is", "john"]