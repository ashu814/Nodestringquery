var str="select * from Employee.csv where department = ‘HR’ and salary >= 3000";

var output=str.split("where",1);
console.log(output);

