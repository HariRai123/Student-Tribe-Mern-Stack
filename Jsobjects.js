// . : an Member access operator 
let book = {
    bookId:553,
    bookName:"Hc Verma",
    author:"Varma",
    price:559
}
console.log(book)
let student={
    studentId:559,
    studentName:"Reethika",
    studentClass:"MSC Data Science",
    college:"Arizona State University"
}
console.log(student);
console.log("--------------------------------------")
student.studentName="Reethika Reddy";
console.log(student);
for(p in student)
{
    console.log(`${p}:  ${student[p]}`)
}
console.log("--------------------------------------");
//function in objects
let book1 = {
    bookId:559,
    bookName:"RD Sharma",
    author:"Sharma",
    price:553,
    printDetails:function(){
        console.log(`ID of the book  : ${this.bookId}`);
        console.log(`Name of the book  : ${this.bookName}`);
        console.log(`Author of the book  : ${this.author}`);
        console.log(`Price of the book  : ${this.price}`);
    }
}
book1.printDetails();
// if methods defined in Js Objects needs access to any property of its objects then they shld prefix the internal refernce
//varible called this
//this is an internal refernce variable which  always refers the current object
console.log("-----------------------------------------------")
let employee=
{
    employeeId:513,
    employeeName:"Sandy",
    salary:25000,
    tenure:3,
    isSaalaryHiked:false,
    incrementSalary :function(){
        if(!this.isSaalaryHiked)
        {
            if(this.tenure<=2)
            {
                this.salary=this.salary+this.salary*0.1;
            }
            else if(this.tenure<=4)
            {
                this.salary=this.salary+this.salary*0.2;
            }
            else{
                this.salary=this.salary+this.salary*0.3;
            }
        }
    },
    printEmployeeDetails:function()
    {
        console.log(`Id of the employee is ${this.employeeId}`);
        console.log(`Name of the employee is ${this.employeeName}`);    
        console.log(`Salary of the employee is ${this.salary}`);
        console.log(`Tenure of the employee is ${this.tenure}`);
                    
    }
}
employee.incrementSalary();
employee.printEmployeeDetails();