var http = require('http');
var fs = require('fs');
require('dotenv').config()

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write(process.env.A);
        } else {
            response.write('Successfylly!');
        }
        response.end();
    });
}
http.createServer(onRequest).listen(8000);