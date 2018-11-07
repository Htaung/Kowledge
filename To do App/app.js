var express = require('express');
var todoController = require('./controllers/todoController');


var app = express();

//set up template engine
app.set('view engine', 'ejs');

//staic file
app.use(express.static('./public')); // localhost:3000/assests/styles.css

//fire controller
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');