
var http = require('http');
var url = require('url');

function startServer(route, handle) {

    function onRequest(request, response) {
        console.log('request received');
        var pathname = url.parse(request.url).pathname;
        route(handle,pathname,response);
        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("hello from our application server");
        // response.end()
    }

    http.createServer(onRequest).listen(8888);
    console.log("server started on localhost port 8888");
}

exports.startServer = startServer;

