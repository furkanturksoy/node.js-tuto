var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("welcome to my app");
})

app.get("/dog", function(req,res){
    res.send("welcome to doggpage");
})

app.get("/:animal/:sound", function(req,res){
    res.send("welcome to" + req.params.animal + "page" + req.params.sound);
})



app.listen("3000", function(){
    console.log("hello")
});
