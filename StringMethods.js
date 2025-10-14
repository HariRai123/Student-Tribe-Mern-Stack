let a="hii";
let c= a.toUpperCase();
console.log(c);
let b="HELLO";
let d=b.toLowerCase();
console.log(d);
let e="     Hii I'm a string with spaces";
let f=e.trim();
console.log(f);
let g="I'm a string with multiple lines\nI'm the second line";
let str="0123456789";
let s="hellohhh"
console.log(str.slice(1,7));
console.log(s.slice(1));
let res=a.concat(b);
console.log(res)
console.log(s.replace("h" ,"p"));
console.log(s.replaceAll("h","p"));
let str1="ilovejsandjsismyfavsub"
console.log(str1.charAt(3));
console.log(str1.charAt(-1))// prints empty space which may lead to confusion to end user
console.log(str1.at(-1))//at works same as charAt and also used to access negative values
console.log(str1.indexOf("js"))
console.log(str1.indexOf("js",6))//here 6 refers to search the character after the index number 6
console.log(str1.includes("js"))// returns true or false
console.log(str1.includes("js",6))