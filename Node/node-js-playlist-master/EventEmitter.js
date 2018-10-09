/*var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emit');
*/

var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};


util.inherits(Person,events.EventEmitter);

var aa = new Person('Aung');
var mary = new Person('Mary');
var thiri = new Person('Thiri');

var people = [aa, mary, thiri];

people.forEach( function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: '+ msg);
    });
});

aa.emit('speak', 'I want to love');
thiri.emit('speak', 'blah blah i don\'t love you');