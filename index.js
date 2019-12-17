var PORT = process.env.PORT || 8080
var http = require('http')
var main = require('./main')

http.createServer(function (req, res) {
    console.log("go!")

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello World!</h1><p>Now is: ' + main.myDateTime() + '</p>')
    res.write("<script>var x = new XMLHttpRequest();x.open('GET', 'https://viacep.com.br/ws/50791251/json/');x.send()</script>")
    res.end()
}).listen(PORT)
console.log('Server running at port ' + PORT)