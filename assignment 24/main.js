"use strict";
let apple = "apple";
let upperCaseApple = "APPLE";
let A = 10;
let B = 20;
let fruits = ["Apple", "Orange", "Banana", "Mango"];
//test with equality and inequality with string
console.log("\nIs apple equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");
//test using lower cASE FUNCTION
console.log("\nIs APPLE equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE not equal to apple after converting to lower case?");
console.log(upperCaseApple.toLowerCase() != "apple");
//test with numeric value 
//equal 
console.log("\nIs A equals to B?");
console.log(A == B);
//not equal
console.log("\nIs A not equals to B?");
console.log(A != B);
//greater 
console.log("\nIs A greater than B?");
console.log(A > B);
//less
console.log("\nIs A less than B?");
console.log(A < B);
//greater or equal
console.log("\nIs A  greater or equals to B?");
console.log(A >= B);
//less or equal
console.log("\nIs A less than or equals to B?");
console.log(A <= B);
//test usong "and" operators
console.log("\n A is  not equals to B and A is greater than B");
console.log(A != B && A > B);
console.log("\n A is  not equals to B and A is less than B");
console.log(A != B && A < B);
//test using "or" operator
console.log("\nA is equals to B or B is greater than A");
console.log(A == B || B > A);
console.log("\nIs A equals to B or B is less than A");
console.log(A == B || B > A);
//test using items in array
console.log("\nIs orange included in myFruit array?");
console.log(fruits.includes("Orange"));
console.log("\nIs orange not included in myFruit array?");
console.log(!fruits.includes("Orange"));
