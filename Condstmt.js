// if(true)
// {
//     console.log("hello");
// }
// else
// {
//     console.log("bye");
// }   
// let age=18;
// if(age>=18)
// {
//     console.log("eligible to vote");
// }
// else
// {
//     console.log("not eligible to vote");
// }
// let x="";
// if(x)
// {
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }
// let str="hello";
// if(str)
// {
//     console.log("true");
// }       
// else
// {
//     console.log("false");       
// }
// let num=0;
// if(num)
// {
//     console.log("true");
// }   
// else
// {
//     console.log("false");
// }
// let num1=5;
// let num2=10;
// let num3=5;
// if(num1>num2 && num1>num3)
// {
//     console.log("num1 is greatest");
// }
// else if(num2>num1 && num2>num3)
// {
//     console.log("num2 is greatest");
// }
// else if(num3>num1 && num3>num2)
// {
//     console.log("num3 is greatest");
// }
// else if(num1==num2 && num1>num3)
// {
//     console.log("num1 and num2 are equal and greater than num3");
// }
// else if(num2==num3 && num2>num1)
// {
//     console.log("num2 and num3 are equal and greater than num1");
// }
// else if(num1==num3 && num1>num2)
// {
//     console.log("num1 and num3 are equal and greater than num2");
// }
// else if(num1==num2 && num2==num3)
// {
//     console.log("all are equal");
// }   
// else
// {
//     console.log("invalid");
// }
//if else for tax slab
let monthsal=100000;
let annsal=monthsal*12;
let itr=0;
if(annsal<=250000)
{
    console.log("no tax");
} 
else if(annsal <=500000)
{
    annsal=annsal-250000;
     itr=annsal*0.1
    console.log(itr);
}
else if(annsal<=100000)
{
    annsal=annsal-500000;
    itr=itr+annsal*0.2;
    console.log(itr);
}
else{
    itr=itr+annsal*0.3;
    console.log(itr);
}
