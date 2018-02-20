var string="select * from emp order by salaray";
var output= string.split(" ").pop();
console.log("Order by field : " + output);

var string="select * from emp group by department";
var output= string.split(" ").pop();
console.log("group by field : " + output);

