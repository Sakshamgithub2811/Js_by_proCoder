// -> There are 2 types of Data Types in JavaScript:

// 1. Primitive (Immutable -> These cannot be changed. If you "modify" them, a new value is created.)
// 2. Non-Primitive (Mutable -> These can be modified directly without creating a new reference.)

// Note: Primitive data types are stored by **value**.

// Example: stored by value
let a = "Saksham";
let b = a;

b = "Shrivastava";

console.log(a); // 👉 "Saksham"
console.log(b); // 👉 "Shrivastava"

// ==============================================================================
// Primitive data types (7 types):

// 1. Number        -> e.g., 1, 4.2
// 2. String        -> e.g., 'hello', "hello", `hello`
//                    Template literals: `${variable}` can be used inside backticks
// 3. Boolean       -> true or false
// 4. Undefined     -> A variable that is declared but not assigned
// 5. Null          -> Assigned intentionally to represent "no value"
// 6. BigInt        -> For large integers beyond safe integer range
// 7. Symbol        -> Unique and immutable values often used as object keys

// ==============================================================================
// Type conversion examples:

// String to Number
console.log(+"1000");           // -> 1000 (string to number)
console.log(+"Anurag");         // -> NaN (not a valid number)
console.log(parseInt("100abc")); // -> 100
console.log(parseInt("abc100")); // -> NaN (100 not at start)

// Number to String
console.log(100 + "");          // -> "100" (number to string)

// ==============================================================================
// Boolean conversion
console.log(+false); // -> 0
console.log(+true);  // -> 1

// ==============================================================================
// Undefined vs Null

let x;
console.log(x);         // -> undefined
let y = null;
console.log(y);         // -> null
console.log(typeof y);  // -> "object" (quirk in JavaScript)

// Odd cases:
console.log(+null);             // -> 0
console.log(+undefined);        // -> NaN
console.log(parseInt(undefined)); // -> NaN

// ==============================================================================
// typeof operator is used to check the data type

console.log(typeof "Hello");       // -> string
console.log(typeof 42);            // -> number
console.log(typeof true);          // -> boolean
console.log(typeof undefined);     // -> undefined
console.log(typeof null);          // -> object (special case)
console.log(typeof BigInt(1234));  // -> bigint
console.log(typeof Symbol("id"));  // -> symbol
