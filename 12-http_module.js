const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/')
{
	res.write('Welcome to our homepage');
} else if (req.url === '/about')
{
	res.write('About us page');
} else {
	res.write('<h1>Oops!<br> Page not found</h1>');
}
res.end();
})

server.listen(5000);