function route(handle,pathname,response) {
    console.log("routing a request for "+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);
    }else{
        console.log("no handler for "+pathname)
    }
}
exports.route = route;