var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

var server = app.listen(3000, function(){
    console.log('listening to req 3000');
});

app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('make socket conection', socket.id);
});