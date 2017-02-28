var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("hi there!");
})

app.get("r/:subreddit/:id/:title", function(){

}) // route parameters

app.listen("3000", function(){
    console.log("hello")
});
