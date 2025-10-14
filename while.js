let i=1;
while(i<=5){
    console.log(i);
    i++;
}
// WAP to print sum of the given digits
let num=1234;
console.log(`The given number is ${num}`);
let sum=0;
while(num>0){
    let digit=num%10;
    sum=sum+digit;
    num=parseInt(num/10);
}
console.log(`The sum of the digits is ${sum}`);
// WAP to print factorial of a number
let n=5;
let fact=1;
while(n>0){
    fact=fact*n;
    n--;
}
if(n<0)
{
    n=0;
}
console.log(`The factorial of the number is ${fact}`);
// WAP to print reverse of a number
let number=1234;
let rev=0;

while(number>0){
    let digit=number%10;
    rev=rev*10+digit;
    number=parseInt(number/10);
}
console.log(`The reverse of the number is ${rev}`);
// WAP to check whether the number is palindrome or not
let num1=121;
let temp=num1;
let reverse=0;  
while(num1>0){
    let digit=num1%10;
    reverse=reverse*10+digit;
    num1=parseInt(num1/10);
}
if(temp==reverse)
{
    console.log(`The given number ${temp} is an palindrome`)
}
else{
    console.log(`The given number ${temp} is not an palindrome`)
}
// perfect number
//armstrong number
//prime number
//swapping of two numbers
let a=5;
let b=10;
console.log(`Before swapping a=${a} and b=${b}`);
// without third variable
a=a+b;  
b=a-b;
a=a-b;
console.log(`After swapping a=${a} and b=${b}`);
//prime number
