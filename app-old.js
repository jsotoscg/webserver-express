const http = require('http');
const { listenerCount } = require('process');

http.createServer((req, res) => {
        res.write('Hola mundo');
        res.end();
    })
    .listen(8080);

console.log('escuchando ...');