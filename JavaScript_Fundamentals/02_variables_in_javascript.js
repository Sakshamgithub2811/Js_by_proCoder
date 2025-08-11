// -> Variables in JavaScript
// A JavaScript variable is just a name for a storage location.

// We can declare variables in three ways:
// `let` and `const` were introduced in ECMAScript 2015 (ES6). `var` has been in JavaScript since the beginning.

// 1. Using `let` keyword
// 2. Using `const` keyword
// 3. Using `var` keyword

// ==============================================================================
// We can initialize a variable either at the time of declaration or later (only for `let` and `var`).

let username = "Saksham";
console.log(username); // -> "Saksham"

let userIntro = "My name is Anurag Singh";
console.log(userIntro); // -> "My name is Anurag Singh"

let age = 25;
console.log(age); // -> 25

let isHappy = true;
console.log(isHappy); // -> true

let userfile = username;
console.log(userfile); // -> "Saksham"

let userNamefull =
  "Hi, my name is " + username + " — " + userIntro + ". My age is " + age + ".";
console.log(userNamefull);
// -> "Hi, my name is Saksham — My name is Anurag Singh. My age is 25."

let a;
console.log(a); // -> undefined (declared but not initialized)

// ==============================================================================
// -> `const` variables must be initialized at the time of declaration

const hoursInDay = 24;
console.log(hoursInDay); // -> 24

// Reassigning a const variable will throw an error:
// hoursInDay = 18; // ❌ Uncaught TypeError: Assignment to constant variable

// ==============================================================================
// -> Scope behavior of `var`, `let`, and `const`

{
  var variable1 = "saksham"; // Function-scoped (not block-scoped)
}

{
  let variable2 = "abhishek"; // Block-scoped
}

// `variable1` is accessible here because `var` is function-scoped, not block-scoped
console.log(variable1); // -> "saksham"

// `variable2` is not accessible here; it will throw ReferenceError
// console.log(variable2); // ❌ ReferenceError: variable2 is not defined

// ==============================================================================
// -> Demonstrating hoisting

console.log(variable3); // -> undefined (due to `var` hoisting)
var variable3 = "saksham";
console.log(variable3); // -> "saksham"

// `let` and `const` are hoisted but remain in the Temporal Dead Zone (TDZ)
// console.log(variable4); // ❌ ReferenceError: Cannot access 'variable4' before initialization
let variable4 = "saksham";
console.log(variable4); // -> "saksham"
