

// == equal to (equaltiy)
// eg:
 const user1 = 18;
 const user2 = 24;
 console.log(user1==user2); // false
    
 const user3 = '18';
 const user4 = 23;
 console.log(user1==user2); //false , it does implicit conversion automatically.

 // === equal value and equal type (strict equaltiy)
 const user5 = "23";
 const user6 = 34; 
 console.log(user5=== user6); // false, because it checks datatype as well as value.

//  if i want to use === then use explicit conversion Like 
 console.log(parseInt(user5) === user6);

//  != not equal 
console.log(user1 != user2); // true
console.log(user3 != user4); //true because it also does implicit conversion automatically.

// !==
console.log(user3 !== user4); // true
console.log(user1 !== user2); // true

// > greater then
// < less then
// >= greater then equals to 
// <= less then equals to