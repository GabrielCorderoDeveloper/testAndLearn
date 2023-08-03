const http = require('http');

http.createServer(function (req, res) {
    console.log('New request!');
    console.log(req.url);

    res.write('Hi, I am using HTTP of NodeJS');

    res.end();
}).listen(3000);