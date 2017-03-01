var events = require("events"); // core module
var util = require("util"); //core module


var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter); //this inherits from eventemitter


var James = new Person("james");
var Mary = new Person("Mary");
var Ryu = new Person("Ryu");

var people = [James,Mary,Ryu];

people.forEach(function(person){
    person.on("speak",function(msg){
        console.log(person.name + " " + msg)
    });
}); // creates the event

james.emit("speak", "hey dudes"); //runs the event

