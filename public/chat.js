// Make connection
 
var socket = io.connect('http://localhost:4000');

// DOM query

var message = document.getElementById('message')
var output = document.getElementById('output')
var btn = document.getElementById('send')
var feedback = document.getElementById('feedback')


//events

btn.addEventListener('click',function() {
    socket.emit('chat',{
        message: message.value,
        handle: handle.value,
        
    },)
    message.value=" ";
    
})

message.addEventListener('keypress',function() {
   socket.emit('typing',handle.value) 
})

//listen

socket.on('chat',function(data) {
    feedback.innerHTML="";
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})

socket.on('typing',function(data) {
    
    feedback .innerHTML = '<p><em>' + data + 'is typing....</em></p>';
})

