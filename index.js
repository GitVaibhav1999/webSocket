var express = require('express');
var socket = require('socket.io');

var app = express();
var port = 4000;
var server = app.listen(port, function() {
    console.log(`Listening to request on ${port}`);
})


//Static files

app.use(express.static('public'));

// Socket Setup

var io = socket(server);


io.on('connection', function(socket) {

    console.log('Client connected.');


    socket.on('chat',function(data) {
        io.sockets.emit('chat',data)  
    })

    socket.on('typing',function(data) {
        socket.broadcast.emit('typing',data);
    })

});