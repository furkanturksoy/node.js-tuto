
var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(msg){
    console.log(msg); 
}) //creates the event

myEmitter.emit("someEvent", "the event was emitted") //runs the event

