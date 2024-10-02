console.log("Running");


const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let fileName =  "."+q.pathname;
    fs.readFile(fileName == "./" ? "./index.html" : fileName, function(err, data) {
        if (err) {
            fs.readFile('404.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
              });
              return;
          }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(8080);