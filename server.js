const http = require('http');
const Router = require('./router');

const PORT = 3000;

const server = function(port, callback) {
    this.serverInstance = http.createServer((req, res) => {
        Router(req, res);
    });

    this.serverInstance.listen(port);
    callback();
};

server(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
});
