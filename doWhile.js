let i=1;
console.log("Starting of do while loop")
do{
console.log("Welcome to do while loop"+ " "+i);
i++;
}while(i<=5);
console.log("Ending of do while loop")

let num=12345;
console.log(`The given number is ${num}`);
let sum=0;
do{
    let n=num%10;
    sum+=n;
    num=parseInt(num/10);
}
while(num!=0);
console.log(`The sum of the digits is ${sum}`);
// WAP to print factorial of a number
let n=5;
let temp=n;
let fact=1;
do{
    fact=fact*n;
    n--;
}while(n>0);
console.log(`The fctorial of the number ${temp} is ${fact}`);