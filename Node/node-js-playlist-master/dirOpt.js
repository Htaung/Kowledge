var fs = require('fs');


//fs.unlink('writeMe.txt');

//fs.mkdirSync('Stuff');

//fs.rmdirSync('Stuff');

/*fs.mkdir('Stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./Stuff/writeMe.txt', data);
    });
});*/

//fs.rmdir('Stuff');
fs.unlink('./Stuff/writeMe.txt', function(){
    fs.rmdir('Stuff');
});