var http = require('http');

function execute(request,response){
        console.log('request received')
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
}

http.createServer(execute).listen(8888);
console.log('server started on port 8888');