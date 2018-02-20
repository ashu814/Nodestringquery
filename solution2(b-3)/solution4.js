var string = "select * from emp group by department";  
var output = string.split("by");  
for (var i in output) {  
   console.log("Group by field :" + output[i]);  
 
}


