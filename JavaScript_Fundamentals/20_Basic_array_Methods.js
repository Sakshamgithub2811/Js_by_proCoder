// push() → adds elements to the end of the array
let fruits = ["apple", "banana"];
fruits.push("mango"); // adds to the end
console.log(fruits); // ["apple", "banana", "mango"]

fruits.push("grapes", "pineapple");
console.log(fruits); // ["apple", "banana", "mango", "grapes", "pineapple"]


// pop() → removes the last element of the array and returns it
let colors = ["red", "green", "blue"];
let removedColor = colors.pop(); // removes "blue"
console.log(colors); // ["red", "green"]
console.log(removedColor); // "blue"


// shift() → removes the first element of the array and returns it
let animals = ["lion", "tiger", "elephant"];
let removedAnimal = animals.shift(); // removes "lion"
console.log(animals); // ["tiger", "elephant"]
console.log(removedAnimal); // "lion"


// unshift() → adds elements to the beginning of the array
let cities = ["Delhi", "Mumbai"];
cities.unshift("Kolkata"); // adds at start
console.log(cities); // ["Kolkata", "Delhi", "Mumbai"]

cities.unshift("Chennai", "Pune");
console.log(cities); // ["Chennai", "Pune", "Kolkata", "Delhi", "Mumbai"]


// concat() → joins arrays
const evenNumber = [2, 4, 6, 8, 10];
const animal = ["lion", "cat", "dog"];
const concatArray = evenNumber.concat(animal);
console.log(concatArray);

// we can also concat multiple arrays
const oddNumber = [1, 3, 5, 7];
const concatArray2 = evenNumber.concat(animal, oddNumber);
console.log(concatArray2);


// indexOf() → returns the first index of the searched element
let fruitsList = ["apple", "banana", "mango", "banana", "grapes"];

console.log(fruitsList.indexOf("banana", 0)); // 1
console.log(fruitsList.indexOf("banana", 2)); // 3

console.log(fruitsList.indexOf("banana")); // 1
console.log(fruitsList.indexOf("mango"));  // 2
console.log(fruitsList.indexOf("grapes")); // 4

let numbers = [1, 2, 3, 2, 4];
console.log(numbers.indexOf(2));    // 1 (first match)
console.log(numbers.indexOf(2, 2)); // 3 (search from index 2)


// includes() → checks if an array contains a value
let fruits2 = ["apple", "banana", "mango"];

console.log(fruits2.includes("banana")); // true
console.log(fruits2.includes("grapes")); // false

let numbers2 = [1, 2, 3, 2];
console.log(numbers2.includes(2));       // true
console.log(numbers2.includes(2, 2));    // true (from index 2)
console.log(numbers2.includes(2, 3));    // true (index 3 is 2)
console.log(numbers2.includes(2, 4));    // false

let colors2 = ["Red", "Green", "Blue"];
console.log(colors2.includes("red")); // false (case-sensitive)
console.log(colors2.includes("Red")); // true

let data = [10, 20, NaN];
console.log(data.includes(NaN)); // true


// reverse() → reverses array elements
let fruits3 = ["apple", "banana", "mango"];
let reversedFruits = fruits3.reverse();

console.log(reversedFruits); // ["mango", "banana", "apple"]
console.log(fruits3);        // ["mango", "banana", "apple"]

let numbers3 = [1, 2, 3, 4, 5];
numbers3.reverse();
console.log(numbers3); // [5, 4, 3, 2, 1]

let letters = ["H", "e", "l", "l", "o"];
let reversedString = letters.reverse().join("");
console.log(reversedString); // "olleH"


// sort() → sorts array elements
let numbers4 = [40, 100, 5, 25, 10];
numbers4.sort();
console.log(numbers4); 
// [10, 100, 25, 40, 5] ❌ (because it sorts alphabetically by default)


// Correct number sorting
let numbers5 = [40, 100, 5, 25, 10];

// Ascending order
numbers5.sort((a, b) => a - b);
console.log(numbers5); // [5, 10, 25, 40, 100]

// Descending order
numbers5.sort((a, b) => b - a);
console.log(numbers5); // [100, 40, 25, 10, 5]

// Sorting by word length
let words = ["apple", "banana", "kiwi", "mango"];
words.sort((a, b) => a.length - b.length);
console.log(words); // ["kiwi", "mango", "apple", "banana"]


// slice() → extracts part of an array (non-destructive)

// 1. Basic slicing
let fruits4 = ["apple", "banana", "mango", "grapes", "pineapple"];
let sliced1 = fruits4.slice(1, 3);
console.log(sliced1); // ["banana", "mango"]
console.log(fruits4); // ["apple", "banana", "mango", "grapes", "pineapple"]

// 2. Omitting the second parameter
let animals2 = ["lion", "tiger", "elephant", "zebra"];
let sliced2 = animals2.slice(2);
console.log(sliced2); // ["elephant", "zebra"]

// 3. Using negative indices
let numbers6 = [10, 20, 30, 40, 50];
console.log(numbers6.slice(-2));   // [40, 50]
console.log(numbers6.slice(1, -1)); // [20, 30, 40]

// 4. Copying an array
let colors3 = ["red", "green", "blue"];
let copyColors = colors3.slice();
console.log(copyColors); // ["red", "green", "blue"]
console.log(copyColors === colors3); // false

// 5. Working with strings
let text = "Hello World";
console.log(text.slice(0, 5));   // "Hello"
console.log(text.slice(-5));     // "World"


// splice() → modifies the array (removes/adds/replaces)

// 1. Remove elements
let fruits5 = ["apple", "banana", "mango", "grapes"];
let removed1 = fruits5.splice(1, 2);
console.log(fruits5);  // ["apple", "grapes"]
console.log(removed1); // ["banana", "mango"]

// 2. Add elements
let colors4 = ["red", "blue"];
colors4.splice(1, 0, "green", "yellow");
console.log(colors4); // ["red", "green", "yellow", "blue"]

// 3. Replace elements
let numbers7 = [1, 2, 3, 4, 5];
numbers7.splice(2, 2, 99, 100);
console.log(numbers7); // [1, 2, 99, 100, 5]

// 4. Remove all elements from a certain index
let animals3 = ["lion", "tiger", "elephant", "zebra"];
let removed2 = animals3.splice(2);
console.log(animals3); // ["lion", "tiger"]
console.log(removed2); // ["elephant", "zebra"]

// 5. Insert at the end
let cities2 = ["Delhi", "Mumbai"];
cities2.splice(cities2.length, 0, "Kolkata", "Chennai");
console.log(cities2); // ["Delhi", "Mumbai", "Kolkata", "Chennai"]


// 📌 Key Difference
// slice() → does NOT modify original, returns extracted part
// splice() → DOES modify original, returns removed items
