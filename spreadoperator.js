let a=[10,20,30];
let b=[...a];
a.push(40);
console.log(`Array a is ${a}`);
console.log(`Array b is ${b}`);
//spread operator is an operator in which array elements are copied into another referred array but not the address is copied if the changes done in array1 is not effected in array2 and vice versa