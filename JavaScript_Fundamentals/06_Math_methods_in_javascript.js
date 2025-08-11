//  1. Addition (+)
// let a = 10;
// let b = 5;
// console.log(a + b); // Output: 15

// 2. Subtraction (-)
// console.log(a-b);

// 3. Multiplication (*)
// console.log(a*b);

// 4. Division (/)
// console.log(a/b);

//  5. Modulus (%)
// console.log(a % b); // Output: 0
// console.log(7%3);

// 6. Exponentiation (**)
// console.log(2 ** 3);

// Math Object in javascript 
// properties on Math Object

// 1.Math.PI
// console.log(Math.PI);  Output: 3.141592653589793
// 2.Math.SQRT2
// console.log(Math.SQRT2); Output : 1.4142135623730951
// 3.Math.E
// console.log(Math.E);  Output: 2.718281828459045

// Methods on Math Object
// 1.Math.sqrt(x) 
    // Math.sqrt(number);
    // console.log(Math.sqrt(9)); Output:3
    // console.log(Math.sqrt(25)); Output:5
    // console.log(Math.sqrt(0)); Output:0
    // console.log(Math.sqrt(1)); Output:1

// 2.Math.pow(x,y);
    // Math.pow(Base,exponent);
    // console.log(Math.pow(2,3)); Output: 8 (2³);
    // console.log(Math.pow(5,2)); Output; 25 (5²);
    // console.log(Math.pow(10,0)); Output: 1 (any number to the power of 0 is 1);
    // console.log(Math.pow(4,-1)); Output: 0.25 (1/4);

// 3.Math.floor(x);
// The Math.floor() method rounds a number down to the nearest integer — always towards negative infinity.
    // console.log(Math.floor(4.9)); output: 4
    // console.log(Math.floor(4.1)); output: 4
    // console.log(Math.floor(4)); output: 4
    // console.log(Math.floor(-4.9)); output: -5
    // console.log(Math.floor(-4.1)); output: -5

// 4.Math.ceil(x);
    // Round UP to the nearest whole number (integer), even if the decimal part is very small.
    //    console.log(Math.ceil(4.3)); output:5
    //    console.log(Math.ceil(6.0)); output:6
    //    console.log(Math.ceil(-4.3)); because -4 is greater than -4.3

// 5.Math.round(x);
// for positive
    // console.log(Math.round(4.4)); output:4
    // console.log(Math.round(4.5)); output:5
    // console.log(Math.round(4.6)); output:5

// for negative
    // console.log(Math.round(-4.4)); output:-4
    // console.log(Math.round(-4.5)); output:-4 (roundsup towared negativly)
    // console.log(Math.round(-4.6)); output:-5


    // 5.Math.random()
    // 1.console.log(Math.random()); gives random number between 0 and 1 not including the 1 in it .

    // 2. let num = Math.random() *10;
    // console.log(num); gives a decimal number between 0 and 10 not including the 10 .

    // 3. let num = Math.floor(Math.random()*10);
    // console.log(num);  gives a whole number between 0 to 10 not including the 10.

    // 4. let randomInt = Math.floor(Math.random()*10)+1;
    // console.log(randomInt); gives a whole number between 0 to 10 including the 10.

    // 5. function getRandomNumber(min,max){
    //         return Math.floor(Math.random()*(max-min+1)) + min; 
    // }
    // the range here is 5, 15 so after - it gives 10 , after adding +1 the range is 11 so we have to add the min which is 5 
    // to strech the length and make it to 15 so now total max made is 16 now we can generate from 5 to 16 not including 16.
    // let number = getRandomNumber(5,100);
    // console.log(number);



    // Infinity
    
    // let num  = 8/0 ; output: Infinity;
    // let num  = -8/0 ; output : -Infinity;
    // typeof Infinity ; output : Number;
    // let num = 0/0; output : NaN;
    // typeof NaN; output :Number;