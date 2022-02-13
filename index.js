var fs = require('fs');
var http = require('http');

//用http创建一个静态服务器
http.createServer(function(req, res) {
    fs.readFile(__dirname + req.url, function (err, data) {
        if(err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);