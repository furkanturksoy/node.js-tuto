var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': text/plain})
    var ReadStream = fs.createReadStream() 
    var WriteStream = fs.createWriteStream()  

    ReadStream.pipe(res); // it pipes the stream to the response 
});


server.listen(3000, "127.0.0.1");


// we will pipe the response

