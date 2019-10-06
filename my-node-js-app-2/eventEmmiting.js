var events = require('events');
var eventEmmiter = new events.EventEmitter();

var ringbell = function () {
   console.log('ring ring ring')
};

eventEmmiter.on('bellring', function (message) {
   console.log(message)
});

eventEmmiter.on('doorOpen', ringbell);
eventEmmiter.emit('doorOpen');
eventEmmiter.emit('bellring', 'ring the bell');  