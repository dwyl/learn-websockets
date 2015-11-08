var Hapi = require('hapi');
var Nes = require('nes');

var server = new Hapi.Server();
server.connection({
	host: '0.0.0.0',
	port: Number(process.env.PORT)
});

server.register(Nes, function (err) {

    server.route({
        method: 'GET',
        path: '/',
        config: {
            id: 'hello',
            handler: function (request, reply) {
                return reply('world!');
            }
        }
    });

    server.start(function (err) {
      console.log('listening on: http://127.0.0.1:'+process.env.PORT);
    });
});
