var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response) => {
    var categoria = request.url;

    //A constante __dirname retorna o diretório raiz da aplicação.
    if (categoria == '/artigos') {
        fs.readFile(__dirname + 'index.html', (err, html) => {
            response.end(html);
        });
    } else if (categoria = )
})