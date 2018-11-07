var bodyParser = require('body-parser');
var monGoose = require('mongoose');
//mongodb://<dbuser>:<dbpassword>@ds131903.mlab.com:31903/nodetest

//connect to database
//monGoose.connect('mongodb://aung:10189@thi@#$%@ds131903.mlab.com:31903/nodetest', { useNewUrlParser: true });

var MONGO_URL = 'mongodb://ds131903.mlab.com:31903/nodetest';
var MONGO_DB_USER = 'aung';
var MONGO_DB_PASSWORD = '10189@thi@#$%'; // got problem with escape character in passsword
monGoose.connect(MONGO_URL, {
    auth: {
      user: MONGO_DB_USER,
      password: MONGO_DB_PASSWORD
    },
    useNewUrlParser:true
  })


//MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })

//Create a schema - this is like a blueprint
var todoSchema =  new monGoose.Schema({
    item: String
});

var Todo = monGoose.model('Todo', todoSchema);
/*var itemOne = Todo({item: 'Buy Flowers'}).save(function(err){
    if(err)throw err;
    console.log('item saved');
});*/

//var data = [{item: 'get Milk'},{item: 'Walk Dog'},{item: 'kick some coding ass'}];
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/todo', function(req,res){
        //get data from mongo and pass it to view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        });
        
    });

    app.post('/todo', urlEncodedParser, function(req,res){
        //Get data from the view and edit to mongo Db
        var newTodo =  Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
        /*console.log(req.body);
        data.push(req.body);
        res.json(data);
        */
    });

    app.delete('/todo/:item', function(req,res){
        //delete the req item in mongo db
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
            if(err)throw err;
            res.json(data);
        });
        /*console.log("delete=> " + req.params.item);
        data =  data.filter(function(todo){
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        console.log("after delete==> " + JSON.stringify(data));
        res.json(data);
        */
    });
};