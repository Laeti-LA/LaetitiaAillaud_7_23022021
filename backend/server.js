const express = require('express');
const server = express(); 
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Starting server P7</h1>');
});

server.listen(3000, function() {
    console.log('server listening :-)');
});