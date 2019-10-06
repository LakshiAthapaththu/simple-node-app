var server = require('./server');
var route = require('./route');
var handler = require('./handler')

var handle = {};

handle["/"] = handler.home;
handler["/home"] = handler.home;
handle["/review"] = handler.review;
server.startserver(route.route, handle);
