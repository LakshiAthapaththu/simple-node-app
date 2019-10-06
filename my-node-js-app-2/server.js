var http = require('http');
var url = require('url');
// var route = require('./route')

function startserver(route, handle) {
    function execute(request,response){
        var reviewData = "";
        var pathname = url.parse(request.url).pathname;
        console.log('request received for' + pathname);
        request.setEncoding('UTF8');

        request.addListener("data", function (chunk) {
           reviewData+= chunk
        });

        request.addListener("end", function () {
          route(handle, pathname, response, reviewData)
        })
        // route(pathname);
        // response.writeHead(200, {"Content-Type":"text/plain"});
        // response.write("hello world");
        // response.end();
    }
    http.createServer(execute).listen(8888);
    console.log('server started on port 8888');
}

exports.startserver = startserver




