let a=[10,20,30];
let [x,y,z]=a;
console.log(`Array a is ${a}`);
console.log(`${x} ${y} ${z}`);
let [,b,c]=a;
console.log(`${b} ${c}`);
let [d,,f]=a;
console.log(`${d} ${f}`);
let arr=[100,200,300,400];
let [y1,...z1]=arr; //here ...z1 is not spread operator it is rest operator coz it collects remaining all elements from the array
arr.push(300);
console.log(`${y1} ${z1}`);
console.log(arr)
console.log(typeof(y1));
console.log(typeof z1);