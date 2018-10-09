var stuff = require('./stuff');

console.log(stuff.counter(['Aung', 'Thiri', 'Mary']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,6));


var time = 0;

var timer = setInterval(function(){
    time+=2;
    console.log(time + ' seconds was passed');
    if(time > 5) clearInterval(timer);
},2000);

console.log(__dirname);

console.log(__filename);


var sayHi = x => console.log('hi');

sayHi();

function CallFun(fun){
    fun();
}

CallFun(sayHi);