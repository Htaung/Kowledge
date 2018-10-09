var express = require('express');

var app = express();

//set view engine like view resolver in spring tileViewResolver, 
app.set('view engine', 'ejs');
//by default template will look into /view folder

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    //res.send('This is a contact page');
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req,res){
    res.send('You requested a profile with id of '+ req.params.name);
});


app.listen(3000);