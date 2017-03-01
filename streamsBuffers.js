//readable streams

var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8"); //creates a readable streams

myReadStream.on('data',function(chunk){
    console.log(chunk);
}) //we can record how many chunks coming


//writable streams


var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt", "utf8");

myReadStream.on('data',function(chunk){
    console.log(chunk);
    myWriteStream.write(chunk);
}) // we can read the chunks and write chunks one by one this way


//duplex streams (pipes)

var ReadStream = fs.createReadStream() // we create a read stream 
var WriteStream = fs.createWriteStream() // we create a write stream 

ReadStream.pipe(WriteStream); // that's it it's doing the same job
