var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("hi there!");
})

app.get("r/:subreddit/:id/:title", function(){
    var subreddit : req.params.subbreddit
    var id : req.params.id
    var title : req.params.title //accessing params
    
}) // :subreddit :id :tite are route parameters

app.listen("3000", function(){
    console.log("hello")
});
