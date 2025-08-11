// const userName = "Saksham";
// const userAge = 21;

// console.log(`Name: ${userName}`);
// console.log(`userAge: ${28}`);

// // if(userAge>=16)
//     // console.log('User is a working Professional '); running this statement

// // if(userAge>=30)
//     // console.log('User is a working Professional '); not running this  statement

// if(userAge>=18 && userAge<=24)
//     console.log('running statement');

// if(userAge>=23 && userAge<=30)
//     console.log('not running statement');


// console.log("Program Ended");

// const userName = prompt("Enter Your Name"); 
// const userAge = prompt("Enter your Age"); 

// if(userAge >= 25 && userAge <= 30 ){
//     console.log("User is a working Professional"); 
// }

//prompt is using the age as string and after comparision operator converting it to the number 

const userName = prompt("Enter Your Name"); 
const userAge = prompt("Enter your Age") || 25; 
if((userAge >= 25) && (userAge <= 30 )){
    console.log("User is a working Professional"); 
}

if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
}

if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
}

if (userAge > 45) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
}

console.log('Program Ended!!');

