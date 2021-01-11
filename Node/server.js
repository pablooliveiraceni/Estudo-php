var http = require('http');

var server = http.createServer((req, res) => {
    var categoria = req.url;

    if (categoria == '/front-end') {
        res.end("<html><body><h1>servidor da porta 3001</h1><body></html>");
    }
}).server.listen(3001);


var server = http.createServer((req, res) => {
    var categoria = req.url;

    if (categoria == '/front-end') {
        res.end("<html><body><h1>servidor da porta 3001</h1><body></html>");
    }
}).server.listen(3000);