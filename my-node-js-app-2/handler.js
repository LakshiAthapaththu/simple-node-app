function home(response) {
    response.write("I am Home");
    response.end()

}

function review(response, reviewData ) {
    response.write("I am review");
    response.end()
}
exports.home = home;
exports.review = review;

