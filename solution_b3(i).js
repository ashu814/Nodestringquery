var a= "select * from Employee.csv where department = ‘HR’ and salary >= 3000";
var b = a.split("where")[1];
console.log(b);

