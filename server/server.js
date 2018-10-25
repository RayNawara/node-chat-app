const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage', {
  //   from: 'Andrea',
  //   text: 'Hi! Dinner at 6:30?',
  //   createdAt: new Date()
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage',message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected from server');
  });
});

server.listen(port, () => {
   console.log(`Server is up on port ${port}:`);
   });
