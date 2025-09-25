/*Primitive Data Types */
/*=====================================*/
// Number
// Null
// String
// Symbol
// Boolean
// BigInt
// Undefined
let a= 564
let b= null
let c= "Hello"
let d= Symbol("symbol")
let e= true
let f= 12345678901234567890n
let g
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

//Hoisting
console.log(x); //undefined
var x=5;
console.log(x);
console.log(y); //error // hoisting doesn't work with let and const
//hoisting is a mechanism where variable and function declarations are moved to the top of their scope before code execution
// in let and const, the variables are not initialized until their definition is evaluated. Accessing them before the declaration results in a ReferenceError due to the temporal dead zone.
let y=10;
console.log(y);
console.log(z); //error
const z=15;
console.log(z);