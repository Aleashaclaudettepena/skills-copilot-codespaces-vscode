// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  // Parse the request URL
  var parsedUrl = url.parse(req.url, true);
  var pathname = parsedUrl.pathname;

  // Handle different routes                        
    if (pathname === '/comments') {
    // Read comments from file
    fs.readFile('comments.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });     
            res.end(JSON.stringify({ error: 'Failed to read comments' }));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    }
    );
}   else if (pathname === '/add-comment' && req.method === 'POST') {
