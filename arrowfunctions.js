// => fat arrow
const square =(x)=>{
    return x*x;
}
console.log(square(20));
//sum of two numbers
const sum=(x,y)=>{
    return x+y;
}
console.log(sum(100,200))
const power =(x,n)=>{
    let res=1;
    for(;n>0;n--)
    {
        res=res*x;
    }
    return res;
}
console.log(power(2,3))
//an arrow function can be passed as an argument to other function;
const sumOf3Integers=(x,y,z)=>{
const sum=(x,y)=>{
    return x+y;
}
console.log(sum(x,y)+z)
}
sumOf3Integers(10,20,10);
//
const sum3= function(x,y,z){
    const sum2=function(x,y)
    {
        return x+y;
    }
    return sum2(x,y)+z;
}
console.log(sum3(10,20,50))
//
const sum31= function(x,y,z){
    const sum21=(x,y)=>
    {
        return x+y;
    }
    return sum21(x,y)+z;
}
console.log(sum31(10,10,10));
//function as an argument
const addition=(x,y,z,sum)=>{
    return sum(x,y)+z;
}
console.log(addition(100,200,300,(x,y)=>x+y)) // here x,y,z are the variable okr values sum is an function definition
//cube
//console.log("Cube of the number ")
const cube =(x,sqr)=>{
    return sqr(x)*x;
}
console.log(`The cube of the number 10 is ${cube(10,x=>x*x)}`)