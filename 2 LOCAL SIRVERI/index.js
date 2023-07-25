const http = require('http');
const data =require('./data')
http.createServer((res, resp) => {
    resp.writeHead(200,{'Content-type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(7000)