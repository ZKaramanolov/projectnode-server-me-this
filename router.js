const { parse } = require('querystring');

const routeFilePath = './public';

const SimpleFS = require('./db/SimpleFS.js');

const sFS = new SimpleFS();

const Router = function(req, res) {

    var path = req.url;

    var file = null;

    if (req.method == 'GET') {
        if (path == '/' || path == '/index.html') {
            path = '/index.html';
            file = sFS.rf(routeFilePath + path);
            response(file, "text/html", res);
        } else if (path == '/main.css') {
            file = sFS.rf(routeFilePath + path);
            response(file, "text/css", res);

        } else if (path == '/script.js') {
            file = sFS.rf(routeFilePath + path);
            response(file, "text/js", res);
        } else if(path == '/dropdown') {
            response('asdf' ,'text', res);
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end('Page not found!')
        }
    }
    if (req.method == 'POST') {
        if (path == '/saveMandja') {
            var body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                var fsRes = sFS.write(body, 'menu');
                res.end();
            });
        }
    }
};

var response = function(text, type, res) {
    res.writeHead(200, {"Content-Type": type});
    res.write(text);
    res.end();
};

module.exports = Router;
