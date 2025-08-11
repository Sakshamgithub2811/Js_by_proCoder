
//1. AND (&&) : 
// Returns true only if both operands are truthy.
// Short-circuits: stops evaluating if the first value is falsy.
console.log(true && true);
console.log(true && false);
console.log(5>3 && 10>5);
console.log(0 && "Hello");
console.log("Hi" && "JS"); // return last truthy values (JS);

// 2. OR (||) :
// Returns true if at least one operand is truthy.
// Short-circuits: stops evaluating if the first value is truthy.
console.log(true || false);     // true
console.log(false || false);    // false
console.log(5 > 3 || 10 < 5);   // true
console.log(0 || "Hello");      // "Hello" (stops at first truthy value)
console.log("Hi" || "JS");      // "Hi"

// 3. NOT (!)
//Inverts the truth value.
//Converts the value to boolean first, then flips it.
console.log(!true);      // false
console.log(!false);     // true
console.log(!(5 > 3));   // false
console.log(!"Hello");   // false (non-empty string is truthy)
console.log(!0);         // true (0 is falsy)

//Double NOT (!!)
// Often used to convert any value into a pure boolean:
console.log(!!"Hello");  // true
console.log(!!0);        // false
console.log(!!null);     // false
console.log(!![]);  



