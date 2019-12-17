#To do

- Discover why index.js/http.createServer run twice when refreshing page

- Check if [Richard McGrath's](http://zuga.net/articles/node-errors-referenceerror-xmlhttprequest-is-not-defined/) code (below) works for this project

`var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;`
`var xhr = new XMLHttpRequest();`
`xhr.open("GET", "/demo/book.json");`
`xhr.onreadystatechange = function () {`
`    console.log("readyState = " + this.readyState + ", status = " + this.status);`
`    if (this.readyState == 4 && this.status == 200) {`
`        var result = this.responseText;`
`        console.log(result);`
`    }`
`};`
`xhr.send();`
