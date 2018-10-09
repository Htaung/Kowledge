var http = require('http');

var server = http.createServer(function(req,res){

    console.log('request was made ==> ' + req.url);
    res.writeHead(200, {'Content-type': 'application/json'});
    var myObj= {
        name: 'Aung',
        age: 32,
        job: 'Web'
    };

    //expect buffer or string
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('listening on port ' + 3000);