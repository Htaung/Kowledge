var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is a home page');
});

app.get('/contact', function(req, res){
    res.send('This is a contact page');
});




app.listen(3000);