var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.use(cookieParser());
var State = require('./state');

app.get('/index.html', function (req, res) {
    console.log("Cookies: ", req.cookies)
    res.sendFile( __dirname + "/" + "index.html" );
});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/process_post', urlencodedParser, function (req, res) {

    var id = req.body.ID;
    var state = new State.State(id);

    response = {
        state:state
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

