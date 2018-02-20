var string = "select * from Employee.csv department  = ‘HR’  where salary >= 3000 and ";
var operator = ["=","equlas",">","greate","<=","less-equal",">=","less-then"];
var output = string.split(" ");
for (i = 0; i < output.length; i++) 
{ 
  for(j=0;j<operator.length;j++)
  {
    if(output[i]==operator[j])
    {
    var y=j+1
   console.log("Operator-Name => "+operator[y]);
   y=0;
   }  
   }
}

