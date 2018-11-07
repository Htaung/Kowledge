var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    console.log('request was made ==> ' + req.url);
    res.writeHead(200, {'Content-type': 'text/html'});
    var myReadStrem = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStrem.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening on port ' + 3000);



/*
var myReadStrem = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStrem.pipe(myWriteStream);
*/