//Map is an container which stores key value pair as element
// set is used to add Element;
// get is used to retrieval of value by passing key as an argument
// size
// has() returns whether the Element is available or not
// delete() deletes the value
// values() returns the values 
// keys()  returns the keys
// entries() returns the entries
let map=new Map();
map.set("harirai@gmail.com","Harirai123");
map.set("reethika@gmail.com","Reethika53");
map.set("Tilak@gmail.com","Tilak123")
map.set("Tilak@gmail.com","Tillu2")
console.log(map)
console.log(map.size)
console.log(map.get("reethika@gmail.com"))
console.log(map.has("harirai@gmail.com"))
console.log(map.has("hari@gmail.com"))
//console.log(map.delete("Tilak@gmail.com"));
console.log(map)
let key=map.keys()
for(let i of key)
{
    console.log(i)
}
let val=map.values()
for(let i of val)
{
    console.log(i)
}
let entries=map.entries();
for(let i of entries)
{
    console.log(i)
    console.log(`${i[0]}    ${i[1]}`)
}