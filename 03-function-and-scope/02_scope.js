let a = 10; // global scope
const  b = 20;

if (true) { // block scope
    let a = 100;
    const b = 200;
    var c = 300;
    let d = 400; 
     console.log( "inner:" ,a); // 100 (block scope)
}

console.log(a); // 10 (global scope)
//console.log(d); // not defined (block scope)
console.log(c); // 300 (var is function-scoped, not block-scoped)
// var used very rarely in modern JavaScript due to its function-scoped nature, which can lead to unexpected behavior. It's generally recommended to use let and const for variable declarations to maintain block scope and avoid hoisting issues.


// with node is different and browser is different, in browser var is global scope and in node it is module scope

function one() {
    const username = "Alice"; // function scope
     
    function two() {
        const website = "example.com"; // function scope
        console.log(username); // Alice (accessible from outer function)
    }
        //console.log(website); // ReferenceError: website is not defined (not accessible from outer function)
       two(); // not accessible from outer function

}
one();


