// JavaScript source code
const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 8081;

fs.readFile('index.html', (error, html) =>{
	if(error){
		throw error;
	}
	const server = http.createServer((request, response) => {
		if (request.url === '/'){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.write(html);
			response.end();
		}
	});
	server.listen(port, host, () => {
		console.log("Michael's Server running at http://"+host+":"+port);
	});
});