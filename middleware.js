// middleware is a function that runs between request and response

app.get("", function(req,res){

}) // the function is middleware for all the get requests made


app.get("/hello", function(req,res,next){})

// the function is middleware for all the get requests made to the /hello url


app.use("", function(){}) // when we use .use() it will run both get methods or post methods


// we can call next() to run the next middleware 