// Set                     |           WeakSet
// ------------------------------------------------------
// Stores Values/Objects   | Stores Objects
// has ,delete ,add,clear, | 
// size.                   |
// it is iterable          |  it is not iterable
let emp1={
    id:100,
    name:"Hari",
    sal:"25000"
}
let book={
    id:200,
    name:"DC",
    author:"Marvel"
}
let set = new WeakSet();
let set1= new Set();
set.add(emp1);
set.add(book);
set1.add(emp1);
set1.add(book);
// here the weakset is not iterable and throws an errror that it is not iterable
// for(let i of set){
//     console.log(i)
// }
for(let i of set1){
    console.log(i)
}