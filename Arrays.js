let marks=[80,82,90,96,75];
let sum=0;
for(let val of marks)
{
  sum+=val;
}
console.log(sum);
let avg=sum/marks.length;
console.log(`The avg marks of the student is ${avg}`);
 marks[0]=90;
 console.log(marks)

let prices=[250,300,400,500];
let i=0;
for(let val of prices)
{
    val=val*0.1;
    console.log(val);
    prices[i]-=val;
    i++;
}
console.log(`Prices of an item after 10% discount is ${prices}`)
// Creating an array
// let x=[]
// let x=[values]
// let x= new Array(no of elements)
function factorial(n)
{
  let fact=1;
  for(let i=1;i<=n;i++)
  {
    fact=fact*i;
  }
  return fact;
}
console.log(factorial(6))