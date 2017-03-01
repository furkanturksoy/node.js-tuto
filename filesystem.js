var fs = require("fs"); // core module

//// reading a file

var readme = fs.readFileSync("filename.txt", "utf8"); //reads the file sync
fs.readFile("", function(err,data){},); //read file async

console.log(readme) // we can use what's written inside



//// writing to a file

fs.writeFileSync("writeme.txt", data) // writes to a file sync