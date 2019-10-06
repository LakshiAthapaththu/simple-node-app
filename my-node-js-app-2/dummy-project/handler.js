function home(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("executing home function");
    response.end()
    console.log('executing home function')
}
function review(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("executing review handler");
    response.end()
    console.log('executing review handler')
}
exports.home = home;
exports.review = review;