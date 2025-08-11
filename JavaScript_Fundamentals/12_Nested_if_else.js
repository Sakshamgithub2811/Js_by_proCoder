const username = prompt('Please Enter Your Name.');
const userAge = parseInt(prompt('Please Enter Your Age.'));

debugger
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    if (userAge <= 2) {
        console.log('And he/she is a toddler.');
    } else {
        console.log('And he/she is in preschool age.');
    }
    console.log('And he/she is playing.');
} 
else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    if (userAge <= 10) {
        console.log('And he/she is in primary school.');
    } else {
        console.log('And he/she is in high school.');
    }
    console.log('And he/she is learning science and maths.');
} 
else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    if (userAge <= 21) {
        console.log('Likely an undergraduate student.');
    } else {
        console.log('Likely a postgraduate student.');
    }
    console.log('And he/she is learning computer science.');
} 
else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    if (userAge <= 30) {
        console.log('And he/she is in the early career stage.');
    } else {
        console.log('And he/she is in the experienced stage.');
    }
    console.log('And he/she is a web developer.');
} 
else if (userAge > 45) {
    console.log(`${username} is retired.`);
    if (userAge <= 60) {
        console.log('And he/she is young at heart.');
    } else {
        console.log('And he/she is enjoying peaceful senior years.');
    }
    console.log('And he/she reads newspaper.');
} 
else {
    console.log(`Invalid age entered.`);
}

console.log('Program Ended!!');
