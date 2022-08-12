const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    var url = req.url;
    if(url.includes('/api/books')) {
        routes.booksRoutes(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;