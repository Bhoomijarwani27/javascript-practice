// PACKED vs HOLEY, JSVU, V8-debug

// 1) Packed array
// A packed array has no missing slots between index 0 and the last used index.
const packedArray = [10, 20, 30];
console.log("Packed array:", packedArray);
console.log("packedArray[1] =", packedArray[1]);

// 2) Holey array
// A holey array contains missing slots, so some positions are empty.
const holeyArray = [10, , 30];
console.log("Holey array:", holeyArray);
console.log("holeyArray[1] =", holeyArray[1]); // undefined

// 3) Why this matters
// Packed arrays are easier for the JS engine to optimize.
// Holey arrays are less optimized because they contain gaps.

// 4) JSVU
// JSVU helps inspect how JavaScript data is stored internally.
// It is a tool for understanding engine internals.

// 5) V8 Debug
// V8 is the JavaScript engine used by Chrome and Node.js.
// Debugging helps us pause and inspect code while it runs.
function greet(name) {
  debugger;
  return `Hello ${name}`;
}

console.log(greet("John"));