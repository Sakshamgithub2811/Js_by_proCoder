// Ternary Operator 

let value = true ? 'Anurag' :100;
console.log(value);
let value2 = false ? 'Anurag' :100;
console.log(value2);

let gender ='F';
let userMessage = `${gender === 'F' ? 'She' : 'He'} is a college student.`
console.log(userMessage);

let age = 20;

let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";

console.log(category); // Output: "Adult"