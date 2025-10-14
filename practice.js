function sumOfArray(...arr)// here arr is an rest operator
{
let sum=0;
for(let i of arr)
{
    sum+=i;
}
return sum;
}
console.log(sumOfArray());
console.log(sumOfArray(10));
console.log(sumOfArray(10,20));
console.log(sumOfArray(10,20,30,40,50));
console.log(sumOfArray(1,2,3,4,5,6,7,8,9,10));
function searchString(str,idx)
{
    for(let i of idx)
    {

    }
}
searchString(str)