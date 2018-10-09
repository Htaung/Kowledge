var fs = require('fs');

//var readMe = fs.readFileSync('readMe.txt', 'utf8');

//fs.writeFileSync('writeMe.txt', readMe);
//console.log(readMe);

fs.readFile('readMe.txt', 'utf8', function(err,data){
    console.log('data==> '+ data);
    fs.writeFile('writeMe.txt', data);
});

console.log('test');