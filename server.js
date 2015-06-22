var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.write('Bonjour Nantes');
	res.end();
});

var port =8080;
server.listen(port);
server.once('listening',function(){
	console.log('Server démarré sur le port %d',port);
});