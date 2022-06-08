const http = require('http');
const fs = require('fs');

const server = http.createServer(handler);

function handler(request, response) {
    if (request.url === "/api/reports") {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        const json = fs.readFileSync('C:\\Users\\etaylor\\Desktop\\data-processing-backend\\data\\processed\\education.json', 'utf-8');

        response.end(json);
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("Error: Requested resource not found.");
    }
}

server.listen(3000, 'localhost');