const io = require('socket.io')(8000);
const express = require('express')

const app = express();

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        users[socket.id]= name;
        socket.broadcast.emit('user-joined', name)
    })

    socket.on('send', message=>{
     socket.broadcast.emit('recieve', {
        message:message, name:user[socket.id]
     });
    });
})

app.listen(8001, ()=>{
    console.log('server started');
})

