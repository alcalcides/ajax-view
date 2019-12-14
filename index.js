var PORT = process.env.PORT || 8080
var http = require('http')
var main = require('./main')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World! Now is: ' + main.myDateTime())
}).listen(PORT);
console.log('Server running at port ' + PORT)