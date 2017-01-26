var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require("redis");
var serveStatic = require('serve-static');

var subscriber= redis.createClient(6380,'rcache1.redis.cache.windows.net', {auth_pass:process.env.REDIS_PASSWORD, tls: {servername: 'rcache1.redis.cache.windows.net'}});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

subscriber.subscribe("ABNAMRO_BUILDBCAST");
subscriber.on("message", function(channel, message) {
  run_cmd( "deploy.sh", function(text) { console.log (text) });
});

function run_cmd(cmd, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";
    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
