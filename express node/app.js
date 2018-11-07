var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//set view engine like view resolver in spring tileViewResolver, 
app.set('view engine', 'ejs');
//by default template will look into /view folder


//use middleware to asset resources
/*app.use('/assets', function(req, res, next){
    console.log('asset==>' + req.url);
    next();
});*/ //not express way

app.use('/assets', express.static('stuff')); // map logical folder by physical folder

app.get('/', function(req, res){
   // res.sendFile(__dirname + '/index.html');
   res.render('index');
});

app.get('/contact', function(req, res){
    //res.send('This is a contact page');
   // res.sendFile(__dirname + '/contact.html');
   //res.render('contact');
   console.log(req.query);
   res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
} );

app.get('/profile/:name', function(req,res){
    //res.send('You requested a profile with id of '+ req.params.name);
    var data ={age: 32, job: 'ninja', hobbies: ['eating', 'drinking', 'smoking'] };
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);