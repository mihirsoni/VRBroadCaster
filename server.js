var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('public/webEye.html');
});
app.get('/image.jpg',function(req,res){
	res.sendfile('3bhk.jpg');
});

io.on('connection', function(socket){
socket.on('newFrame',function(data){
//	console.log(data);
        io.emit('newFrame',data);
});
socket.on('newEye',function(data){
//	console.log(data);
	io.emit('newEye',data);
});
socket.on('webEye',function(data){
	io.emit('webEye',data);
});
socket.on('speak',function(data){
	io.emit('speak',data);
});
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

