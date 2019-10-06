var fs = require('fs');

fs.readFile('input.txt', function (error,data) {
    if(error){
        console.log(error)
    }
    else {
        console.log('Async data is' + data.toString());
    }
});

var data = fs.readFileSync('input.txt');
console.log('sync data is '+ data.toString());
console.log('This is the end');