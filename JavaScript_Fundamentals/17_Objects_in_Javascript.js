// 1. Primitive Type (Value types)
// 2. Non-Primitive Type (Reference types)

// Primitive data types in JavaScript (7 types):
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. bigint
// 7. symbol

// There is only one type of non-primitive data type: Object.

// Objects are further divided into three categories:
// 1. Object Literals
// 2. Functions
// 3. Arrays

// Example objects:
const User = {}; // empty object

const User1 = {
  firstName: "Saksham",
  lastName: "Shrivastava",
  age: 26,
  education: 12,
  city: "Bangalore"
};

const User2 = {
  firstName: "Saksham",
  lastName: "Shrivastava",
  age: 26,
  education: 12,
  city: "Bangalore"
};

// Even though User1 and User2 have the same content, they have different memory addresses.

// Accessing values from an object:
console.log(User1.firstName); // Saksham

// Primitive string example:
const myName = "Anurag";

// In primitive types, identical values share the same memory reference for optimization:
const userName1 = "";
const userName2 = "";

// Non-primitive example:
const userObj1 = {};
const userObj2 = {};

// Comparing objects compares their addresses, not their content:
console.log(userObj1 === userObj2); // false

// Accessing object keys: two ways
const user2 = {
  firstName: "Saksham",
  lastName: "Shrivastava"
};

console.log(user2.firstName); // Dot notation
console.log(user2["lastName"]); // Bracket notation

// Bracket notation is more powerful than dot notation.
// It can use variables and expressions.
const variableKey = "Anurag";

const user3 = {
  firstName: "Adarsh",
  "last-Name": "Singh",
  Anurag: "Developer"
};

console.log(user3[variableKey]); // Developer
console.log(user3["first" + "Name"]); // Adarsh

// Adding a key to an object:
const user4 = {
  firstName: "Saksham",
  lastName: "Shrivastava"
};

// Adding a new property using dot notation:
user4.age = 45;

// Adding a property with special characters in its name requires bracket notation:
user4["is-student"] = "Rakesh";

console.log(user4);
