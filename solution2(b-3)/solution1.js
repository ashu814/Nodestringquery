var string= "department = ‘HR’ and salary >= 3000";
var split_string = string.split(" ");
for(i = 0; i < split_string.length; i++) 
{ 
    if(split_string[i]=="="||split_string[i]==">=")
    {
    var x=i-1;
    var y=i+1
   console.log("propertyName => "+split_string[x]);

   console.log("properyValue => "+split_string[y]);
   console.log("condtionalOperator => "+split_string[i]);
   
   }
}



