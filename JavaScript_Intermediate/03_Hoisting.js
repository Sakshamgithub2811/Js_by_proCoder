// ✅ Hoisting in JavaScript

// 🔹 What is Hoisting?
// Hoisting is JavaScript’s behavior of moving declarations to the top of the scope
// (before code execution). 
// But — only declarations are hoisted, not initializations.

// Example with var:
console.log(x); // undefined (not error)
var x = 10;
console.log(x); // 10

// Internally, JS treats it like this:
var x;          // declaration hoisted
console.log(x); // undefined
x = 10;         // initialization
console.log(x); // 10

//-------------------------------------------------------------

// 🔹 Difference with let and const
// let and const are also hoisted, but they go into the "Temporal Dead Zone" (TDZ)
// until the line of initialization. Accessing them early throws a ReferenceError.

console.log(y); // ❌ ReferenceError
let y = 5;

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // ✅ 10

console.log(b); // ❌ ReferenceError
const b = 20;
console.log(b); // ✅ 20

//-------------------------------------------------------------

// 🔹 Summary of variable hoisting:
// var   → Hoisted & initialized as undefined.
// let   → Hoisted, but uninitialized (TDZ).
// const → Hoisted, uninitialized (TDZ) + must be initialized at declaration.

//-------------------------------------------------------------

// 🔹 Function Hoisting


// we can define the function in 2 ways from function declaration, function expressions.
// 1. Function Declarations
// These are fully hoisted — both their name and body.
// You can call them before the line of definition.

sayHello(); // ✅ Works!
function sayHello() {
  console.log("Hello!");
}

// Behind the scenes (creation phase):
// Memory: sayHello → function sayHello() { console.log("Hello!"); }

//-------------------------------------------------------------

// 2. Function Expressions (var)
try {
  greet(); // ❌ TypeError: greet is not a function
} catch (e) {
  console.log(e.message);
}

var greet = function () {
  console.log("Hi!");
};

// Memory during creation phase:
// greet → undefined   (because var is hoisted as undefined)

//-------------------------------------------------------------

// 3. Function Expressions (let / const)
try {
  greet2(); // ❌ ReferenceError
} catch (e) {
  console.log(e.message);
}

let greet2 = function () {
  console.log("Hi again!");
};

// Memory:
// greet2 → <uninitialized> (TDZ)

//-------------------------------------------------------------

// 4. Arrow Functions
try {
  sayHi(); // ❌ ReferenceError
} catch (e) {
  console.log(e.message);
}

const sayHi = () => console.log("Hi with arrow!");

//-------------------------------------------------------------

// ✅ Final Summary:
// Function Declarations → Fully hoisted (can call before definition).
// Function Expressions (var) → Hoisted as undefined (TypeError if called early).
// Function Expressions (let/const) → Hoisted into TDZ (ReferenceError if called early).
// Arrow Functions → Same rules as function expressions.
