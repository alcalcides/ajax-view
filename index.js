var PORT = process.env.PORT || 8080
var http = require('http')
var main = require('./main')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello World!</h1><p>Now is: ' + main.myDateTime() + '</p>')
    res.end()
}).listen(PORT)
console.log('Server running at port ' + PORT)