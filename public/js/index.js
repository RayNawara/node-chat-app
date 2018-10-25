let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Ray',
    text: 'Hi! Sure, 6:30 is OK by me.'
  });
});

socket.on('newMessage', function (message) {
  console.log('Got a new message', message);

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

});
