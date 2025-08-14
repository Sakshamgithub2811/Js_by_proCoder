// Array of fruits
const fruitsCollection = ["apple", "banana", "Grapes", "Dates"];
console.log(fruitsCollection);

console.log(typeof fruitsCollection); // "object"
console.log(typeof {});               // "object"
console.log(typeof []);               // "object"

// Access element at index 2
console.log(fruitsCollection[2]);

// Change the element at index 2
fruitsCollection[2] = "Mango";
console.log(fruitsCollection[2]);

// Array with an object
const items1 = [
  "Apple",
  "Banana",
  "Mango",
  { name: "Saksham", city: "Delhi" }
];
console.log(items1);

// Nested object in array
const items2 = [
  "Apple",
  "Banana",
  "Mango",
  {
    name: "Saksham",
    address: {
      city: "Delhi",
      pinCode: 110001,
      moreDetails: {
        population: 20000000,
        famousFor: "Street Food"
      }
    }
  }
];
console.log(items2);

// Nested arrays
const nestedItems = [
  "Apple",
  "Banana",
  "Mango",
  [
    "Grapes",
    "Pineapple",
    [
      "Orange",
      "Papaya",
      [
        "Kiwi",
        "Dragonfruit"
      ]
    ]
  ]
];
console.log(nestedItems);

// Insert values at specific indexes
const fruitsIndexed = ["Apple", "Banana", "Mango", "Orange"];
fruitsIndexed[10] = "Pineapple";
fruitsIndexed[100] = "Papaya";
console.log(fruitsIndexed);

// Demonstrating .push()
const fruitsPush = ["Apple", "Banana", "Mango"];
fruitsPush.push("Orange");
console.log(fruitsPush);

fruitsPush.push("Grapes", "Pineapple");
console.log(fruitsPush);

const newLength = fruitsPush.push("Papaya");
console.log("New length:", newLength);

// Demonstrating .pop()
const fruitsPop = ["Apple", "Banana", "Mango"];
console.log("Initial:", fruitsPop);

fruitsPop.push("Orange");
console.log("After push Orange:", fruitsPop);

fruitsPop.push("Grapes", "Pineapple");
console.log("After push Grapes & Pineapple:", fruitsPop);

const removedFruit = fruitsPop.pop();
console.log("Removed fruit:", removedFruit);
console.log("After pop:", fruitsPop);

fruitsPop.pop();
console.log("After another pop:", fruitsPop);

// Adding custom properties to an array
const myArray = ["Apple", "Banana", "Mango"];
myArray.color = "Yellow";
myArray.type = "Fruits";

console.log(myArray);
console.log("Color:", myArray.color);
console.log("Type:", myArray.type);

// Output example:
// [ 'Apple', 'Banana', 'Mango', color: 'Yellow', type: 'Fruits' ]
// Color: Yellow
// Type: Fruits
