let sen=`This is special string `;
console.log(sen);
console.log(typeof(sen));
//string vs template literal
let obj={
    name:"John",
    age:30
}
console.log("Name of the person is ", obj.name,"and he is ",obj.age,"years old");//string printing
console.log(`Name of the person is ${obj.name} and he is ${obj.age} years old`);//Template literal printing
/*String Interpolation */