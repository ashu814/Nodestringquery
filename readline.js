var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter Your query> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    console.log(line)
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});
