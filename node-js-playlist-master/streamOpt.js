var http = require('http');
var fs = require('fs');

var myReadStrem = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStrem.on('data', function(chunk){
    console.log('new Chunk received');
    
    myWriteStream.write(chunk);
}); 