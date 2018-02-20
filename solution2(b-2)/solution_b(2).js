var string= "select * from Employee.csv where department = ‘HR’ and salary >= 3000";
var output = string.split("where")[1];
console.log(output);

