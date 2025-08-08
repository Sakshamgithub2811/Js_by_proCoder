// -> JavaScript Dialog Boxes (Browser Popups)

// 1. alert()
// - Displays a message to the user with an "OK" button.
// - Does NOT return any value (returns undefined).

alert("Welcome to our site!");

let alertResult = alert("Are you alright?");
console.log(alertResult); // -> undefined

// ==============================================================================
// 2. confirm()
// - Displays a message with "OK" and "Cancel" buttons.
// - Returns true if OK is clicked, false if Cancel is clicked.

let userConfirmed = confirm("Do you want to continue?");
console.log(userConfirmed); // -> true or false

if (userConfirmed) {
  console.log("User chose to continue.");
} else {
  console.log("User cancelled the action.");
}

// ==============================================================================
// 3. prompt()
// - Displays a message and input box to the user.
// - Returns the input string if OK is clicked, or null if Cancel is clicked.

let userName = prompt("What is your name?");
console.log(userName); // -> entered name or null

if (userName !== null) {
  alert("Hello, " + userName + "!");
} else {
  alert("You didn't enter your name.");
}

// ==============================================================================
// ❗ Common Mistakes to Avoid:

// ⚠️ Do NOT name variables the same as functions like `alert`, `prompt`, or `confirm`
// let alert = alert("..."); // ❌ This shadows the built-in alert function!

// ==============================================================================
// ✅ More Examples

// Confirm before deleting something
let isSure = confirm("Are you sure you want to delete this file?");
if (isSure) {
  console.log("File will be deleted.");
} else {
  console.log("File deletion canceled.");
}

// Prompt for age and convert input to number
let ageInput = prompt("Enter your age:");
if (ageInput !== null) {
  let age = Number(ageInput);
  if (!isNaN(age)) {
    alert("Your age is " + age);
  } else {
    alert("That's not a valid number.");
  }
}

// Confirm login with prompt
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username && password) {
  confirm("Do you want to login with username: " + username + "?");
}
