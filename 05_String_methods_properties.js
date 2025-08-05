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

// const finalMessage = "hi, i am Saksham";
// const replacedMessage = finalMessage.replace("a","A");
// console.log(replacedMessage);
//  ->hi, i Am Saksham
// -> but it only changes first a only to replaced all the a's we need to use replaceAll() method

// 4. replaceAll
// it replace all the founding element in the String.
// const finalMessage = "hi, i am Saksham";
// const replacedMessage = finalMessage.replaceAll("a","A");
// console.log(replacedMessage);
// hi, i Am SAkshAm

5.
