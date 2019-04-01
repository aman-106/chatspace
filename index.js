var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use('/assets', express.static('assets')); // to make files server under url this url

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  io.emit('chat message', 'some joined');
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
