function route(handle, pathname, response, reviewData) {
    console.log("routing received for "+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response)
    }
    else {
        console.log('No handler for '+pathname);
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.write('Error 404 page not found')
        response.end();
    }
}
exports.route = route;