var PORT = process.env.PORT || 8080
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(PORT);
console.log('Server running at port ' + PORT);