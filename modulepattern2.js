var counter = function(){
    console.log("hello world")
}

var adder = function(){
    return "";
}

module.exports.counter = counter;
module.exports.adder = adder;

// this will add extensions to required object

// we can use the object like require().counter , require().adder etc
