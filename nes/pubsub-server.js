var Hapi = require('hapi');
var Nes = require('nes');

var server = new Hapi.Server();
server.connection({
	host: '0.0.0.0',
	port: Number(process.env.PORT)
});

server.register(Nes, function (err) {
  server.subscription('/item/{id}');

  server.start(function (err) {
    console.log('listening on: http://127.0.0.1:'+process.env.PORT);
    setTimeout(function(){
      server.publish('/item/5', { id: 5, status: 'complete' });
      server.publish('/item/6', { id: 6, status: 'initial' });
    }, 5000)
  });
});
