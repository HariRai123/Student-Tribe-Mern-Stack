//set is an collection of elements' allows us to store unique values
let s=new Set();
s.add(100);
s.add(200);
s.add(50);
s.add(100);
s.add(300);
console.log(s);
console.log(s.size);
//let arr=[...s];
for(let i of s)
{
    console.log(i)
}
s.delete(100)
console.log(s)
console.log(s.has(100))
s.clear()
console.log(s)


// const employee={
//     id:53,
//     name:"Reethu",
//     location:"TEXAS "
// }
