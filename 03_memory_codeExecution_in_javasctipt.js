// in js there are two phases in which 1 is memory creation phase and another is execution phase .

// In memory creation phase it only see the how many varaibles are there and assign them undefined to all variables. 

// In Execution phase it enters all the values to the variables. 

// debugger keyword use to stop the execution of javascript code .

//    if we are adding the script tag in the head file then -> we can also use defer to load the html first and then js secondly 
// if we use defer keyword then the javascript file won't execute until the html file is completely parsed .
// this case we are using in case of bigger project and production cases .


// or else we can also add script file in the end of body tag .
// this is for small project 

// Ques. Difference between the Script and Global in Chrome DevTools 
// 1. Global Scope
//    Refers to the actual global object, which is window in browsers.

//    Variables declared with var at the top level of your script automatically become properties of the global object.
//    Example: var a = 10;
//    console.log(window.a); // ✅ 10

// 2. Script Scope
//    Refers to variables that are scoped to the script itself, but not added to the global window object.

//    let and const do not pollute the global object. 

//    Example:
//    let b = 20;
//    const c = 30;
//    console.log(window.b); // ❌ undefined
//    console.log(window.c); // ❌ undefined

// console.log(firstname);
// debugger
// var firstName = "saksham";
// let secondName = "shrivastava"
// const age = 43;



