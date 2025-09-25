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