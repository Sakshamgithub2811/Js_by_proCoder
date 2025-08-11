// -> In JavaScript, code execution happens in two phases:

// 1. Memory Creation Phase
//    - The JavaScript engine scans the code and allocates memory for variables and functions.
//    - Variables declared with `var` are hoisted and initialized with `undefined`.
//    - Variables declared with `let` and `const` are hoisted but not initialized (they remain in the TDZ).

// 2. Execution Phase
//    - Code is executed line-by-line.
//    - Values are assigned to variables.
//    - Function code is executed when called.

// ==============================================================================
// The `debugger` keyword is used to pause code execution at a specific point.
console.log(firstName);
debugger;
var firstName = "saksham";
let secondName = "shrivastava";
const age = 43;

// ==============================================================================
// Script Loading in HTML

// ✅ If you add the `<script>` tag in the <head>:
// - The JS may run before HTML is fully parsed.
// - You can prevent this by using the `defer` attribute:
//   <script src="app.js" defer></script>
// - `defer` ensures the script runs **after** the HTML is fully loaded.
// - Commonly used in large projects or production setups.

// ✅ Alternatively, you can place the `<script>` tag at the end of the <body>:
//   <body>
//     ...
//     <script src="app.js"></script>
//   </body>
// - This ensures HTML loads before JS, and is simpler for small projects.

// ==============================================================================
// 🔍 Question: What is the difference between **Script** and **Global** in Chrome DevTools?

// 1. Global Scope:
// - Refers to the actual global object (`window` in browsers).
// - Variables declared with `var` at the top level become properties of `window`.

var a = 10;
console.log(window.a); // ✅ 10

// 2. Script Scope:
// - Refers to variables scoped to the script but **not** attached to `window`.
// - `let` and `const` do NOT pollute the global object.

let b = 20;
const c = 30;
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined

// ==============================================================================
// 🔍 Chrome DevTools: Viewing Variables and TDZ

// When paused at a `debugger` line, DevTools shows variable values.
// - `var` variables show up as `undefined` before initialization.
// - `let` and `const` are in the **Temporal Dead Zone (TDZ)** until declared.
//   - So they **do not appear** as `undefined` in DevTools.

// TDZ is a restriction that prevents access to `let` and `const` variables before they are initialized.

// ✅ Summary Table:

// | Keyword | Hoisted? | Initialized with `undefined`? | TDZ Applies? |
// |---------|----------|-------------------------------|--------------|
// | var     | Yes      | Yes                           | No           |
// | let     | Yes      | No                            | Yes          |
// | const   | Yes      | No                            | Yes          |
