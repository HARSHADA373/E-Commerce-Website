var http = require("http")

http.createServer(function(req,res){
    res.write("hello Team welcome to Backend");
    res.end()
}
).listen(5000)