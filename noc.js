let no=[8,8,9,9,7,6,5,4,9];
let occ=9;
let count=0;
for(let i=0;i<=no.length;i++)
{
    if(occ==no[i])
    {
        count++;
    }
}
console.log(`The no of occurences of ${occ} in the given array is ${count}`);