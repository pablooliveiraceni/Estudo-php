 
/*
//instanciamos a classe http
var http = require ('http');

//utilizamos a função createServer para criar um servidor. 
var server = http.createServer(function (req,res){
    var categoria = req.url;

    if(categoria == '/frontend'){
        res.end("<html><body>Vamos Aprender HTML, CSS, JS?!</body></html>");

    }else if(categoria == '/backend'){
        res.end("<html><body>Vamos aprender PHP e NodeJS?!</body></html>");
    }else if(categoria == '/servidores') {
        res.end("<html><body>Vamos Aprender AWS, IBM, Azure?!");
    }else{
        res.end("<html><body>Hello World!</body></html>");
    }
});

//inserimos um server.listen(porta), para que o servidor seja criado na porta escolhida.
server.listen(3000);
console.log("Servidor Ativo!");

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Hello World!</body></html>");
});

app.get('/backend', function(req, res){
    res.send("<html><body>Vamos aprender NodeJS?!</body></html>");
});

app.get('/', function(req, res){
    res.send("<html><body>Vamos aprender ReactJS?!!</body></html>");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express!");
}); 

var express = require('express');
var app = express();

//Os arquivos de extensão .ejs foram criados no 
//diretório views, e por esse motivo não é obrigatório apontar o diretório no res.render()
//por padrão ele busca os arquivos dentro do diretorio views
app.get('/', function(req, res){
    res.render('index');
});

app.get('/backend', function(req, res){
    res.render('backend');
});

app.get('/frontend', function(req, res){
    res.render('frontend');
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express!");

}); */

var app = require('./app/config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/front')(app);
var rotaHome = require('./app/routes/back')(app);

app.listen(3000, function(){
    console.log("Servidor rodadando com Express!");
});