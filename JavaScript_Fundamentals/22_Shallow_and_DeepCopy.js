// Arrays Example
const fruits = ['Mango', 'Apple', 'Orange'];

const myfruits = fruits;

myfruits.push('Dates');
myfruits.push('Grapes');

console.log("fruits:", fruits);      // ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']
console.log("myfruits:", myfruits);  // same as fruits

// 👉 What’s happening:
// In JavaScript, arrays are objects, so when you do const myfruits = fruits,
// both variables point to the same memory location.
// Modifying one also modifies the other.


// // Objects Example
// const user1 = {
//     firstName: "saksham",
//     lastName: "shrivastava",
//     pata: {
//         city: "Delhi",
//         pincode: 98999,
//     }
// };

// const user2 = user1;

// user2.lastName = "panday";
// console.log("user1:", user1);
// console.log("user2:", user2);

// 👉 What’s happening:
// Same thing here. Objects are reference types.
// user2 is not a new object; it points to the same object as user1.
// So changing user2 also changes user1.


// ⚡ Key takeaway:
// Primitive types (numbers, strings, booleans) → copied by value.
// Objects & arrays → copied by reference.


// ✅ How to copy objects/arrays properly:

// 1. Using Object.assign()
const user3 = {};
Object.assign(user3, user2); 
console.log("user3:", user3); // user3 is a shallow copy

// 2. Using Spread Operator (modern way)
const user4 = { ...user2 };
console.log("user4:", user4);

// 3. For arrays:
const fruits2 = [].concat(fruits);
const fruits3 = fruits.slice();
const fruits4 = [...fruits];

fruits2.push("Microsoft");
console.log("fruits:", fruits);
console.log("fruits2:", fruits2);


// 🚨 Shallow copy limitation:

// What is a shallow copy?
// A shallow copy means:
// Only the first level (top-level) properties of an object/array are copied.
// If there are nested objects/arrays, the copy will still point to the same memory reference.
// So, changing nested data will affect both the original and the copy.
const user1 = {
  name: "Saksham",
  address: {
    city: "Delhi",
    pincode: 12345
  }
};

// Shallow copy using spread operator
const user2 = { ...user1 };

// Change top-level property
user2.name = "Shrivastava";

console.log(user1.name); // "Saksham" ✅ unaffected
console.log(user2.name); // "Shrivastava"

// Change nested property
user2.address.city = "Mumbai";

console.log(user1.address.city); // "Mumbai" ❌ changed!
console.log(user2.address.city); // "Mumbai"

