// -> String are indexed . so Basically we can access any single character of a string by doing something like this .

// expression :'Hello World'[1];
// Result:'e'

// let Word = "hello";
// Word[3];
// result : 'l';
// Word[6];
// result : undefined

// There is only one property that exists.


// 1.length

// let message = "saksham";
// console.log(message.length);
// // -> 6

// let named = "my Name is saksham";
// console.log(named.length);
//-> 18

//Methods {Without Argument};

// 1.toUpperCase

// let messaged = "hello";
// console.log(messaged.toUpperCase());
// 2.toLowerCase
// let string ="HI MY NAME IS";
// console.log(string.toLowerCase());

// 3.trim()
// const faltuMessage = "   my name is skasham   ";
// console.log(faltuMessage.trim());
// console.log(faltuMessage.trim().toUpperCase());
// -> this is chaining of functions.
// 4. trimStart()
// 5. trimEnd()


//Methods {With Arguments};

// 1. includes
// it search the string which is written passes to its argument
// it gives true when string is found or false when not found.argument
// Eg:
//  let faltuName = "my name is saksham2";
//    console.log(faltuName.includes("saksham2")); ->true
//    console.log(faltuName.includes('dfsfas')); ->false
//    console.log(faltuName.includes("is saksham2")); ->true

// 2. indexOf
// it gives the index which is in the arguments , if didn't find then it gives -1.
// console.log(faltuMessage.indexOf("skasham"));->14
// console.log(faltuMessage.indexOf("saksham"))-> -1

// 3. replace 
// it replaces the first string to the second string pass on the argument 
// if not find the first string then it do nothing.
// eg:
// const message1 ="Hi, I am Saksham";
// const replacedMessage = message1.replace("Hi","Hello");
// console.log(replacedMessage);
// // ->Hello, I am Saksham
// const replcedMessage1 = message1.replace("no","hello");
// console.log(replcedMessage1);
// Hi, I am Saksham

const finalMessage = "hi, i am Saksham";
const replacedMessage = finalMessage.replace("a","A");
console.log(replacedMessage);
//  ->hi, i Am Saksham
// -> but it only changes first a only to replaced all the a's we need to use replaceAll() method

// 4. replaceAll
// it replace all the founding element in the String.
const finalMessage1 = "hi, i am Saksham";
const replacedMessage1 = finalMessage1.replaceAll("a","A");
console.log(replacedMessage1);
// hi, i Am SAkshAm
 
// 5. concat -> method for string or array can take any number of arguments in it .
let message = "Hello World";
let finalMessage2 = "I am Saksham";

console.log(message.concat(finalMessage2));
// hi, i Am SAkshAm
console.log(message.concat("    ",finalMessage1));
// Hello World    I am Saksham
let faltuMessage = "fdsafds";
console.log(message.concat(faltuMessage,finalMessage1));
// Hello WorldfdsafdsI am Saksham


// 6.padStart ->The padStart() method is used with strings to pad the beginning 
// of a string with another string until it reaches a desired length.


//1. Eg: basic Padding with space :
let str = "34";
console.log(str.padStart(5)); 
// ->"  34"
// 2. padding with custom characters:
let str1 = "43";
console.log(str.padStart(6,"0")); 
// -> 000034
// 3. with the star *
let lastFourDigits= 4343;
console.log(str.padStart(14,"*"));
// ->************34
// if length is shorter .
let str3 = "12345";
console.log(str3.padStart(3,"*"));
//-> No change(no change, since it's already > 4)


// 6.padEnd() (Same as padStart)

// 7.charAt()
let myName = "my name is saksham";
console.log(myName[4]);
//-> a
 console.log(myName.charAt(3));
//-> n

// 8.charCodeAt() it provides the ascii code
console.log(myName.charCodeAt(11));

// 9. split() -> it split the string in the array

console.log(myName.split(" "));
//(4) ['my', 'name', 'is', 'saksham']
console.log(myName.split("a"));
// (4) ['my n', 'me is s', 'ksh', 'm']


// =========================================================================
// Template literal 
let lastthreeDigits = 434;
let templateString = `last four digit of my account is `;
console.log(templateString +`${lastthreeDigits}`);
// or with concat() method 
let templateString1 = `last four digit of my account is `
 let withconcat = templateString1.concat(lastthreeDigits);
 console.log(withconcat);
