    // 🔹 1. Global Scope

    // The outermost scope in JavaScript.

    // Anything declared outside of a function or block lives here.

    // Accessible from anywhere in the program.

    // 👉 In browsers, the global scope is connected to the global object (window).

    // Example:
    var a = 10;   // var → attaches to window
    let b = 20;   // let → stays in script scope
    const c = 30; // const → stays in script scope

    console.log(a);       // 10
    console.log(window.a); // 10
    console.log(window.b); // undefined


    // ✅ Important split in global scope:

    // Window object group (Object Environment Record): holds var and function declarations.

    // Script scope group (Declarative Environment Record): holds let and const.

    // So global scope = (window scope + script scope).

    // 🔹 2. Script Scope (Declarative Environment Record)

    // Introduced with ES6 (let & const).

    // Keeps block-scoped variables safe.

    // Prevents accidental overwriting of global object properties.

    // Variables here do not attach to the global object (window).

    // Example:
    let x = 50;
    const y = 100;

    console.log(x);        // 50
    console.log(window.x); // undefined ❌


    // This is why we say script scope is separate from the window object.

    // 🔹 3. Local Scope (Function / Block Scope)

    // Created when a function or block is executed.

    // Variables declared with var inside a function → function-scoped.

    // Variables declared with let/const → block-scoped.

    // Local variables are not accessible outside their scope.

    // Example (Function scope):
    function greet() {
    var msg = "Hello!";
    console.log(msg); // accessible here
    }
    greet();
    console.log(msg); // ❌ ReferenceError

    // Example (Block scope with let/const):
    if (true) {
    let blockVar = 42;
    const blockConst = "test";
    console.log(blockVar, blockConst); // works
    }
    console.log(blockVar); // ❌ ReferenceError

    // ✅ Summary Table
    // Scope Type	Where it lives?	Accessible from?	Attached to window?
    // Global Scope	Top-level code	Everywhere	var ✅, let/const ❌
    // Script Scope	Global (let, const)	Everywhere	❌ Not attached to window
    // Local Scope	Function/Block	Inside that function/block only	❌

    // 👉 So think of it like this:

    // Global scope is the “top box” containing everything.

    // Inside global, there are two compartments: window object and script scope.

    // Local scope is created fresh every time a function or block runs.