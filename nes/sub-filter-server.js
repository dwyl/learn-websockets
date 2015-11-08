var Hapi = require('hapi');
var Basic = require('hapi-auth-basic');
var Bcrypt = require('bcrypt');
var Nes = require('nes');

var server = new Hapi.Server();
server.connection({
	host: '0.0.0.0',
	port: Number(process.env.PORT)
});

server.register([Basic, Nes], function (err) {

    // Set up HTTP Basic authentication

    var users = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    var validate = function (request, username, password, callback) {

        var user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, function (err, isValid) {

            callback(err, isValid, { id: user.id, name: user.name, username: user.username });
        });
    };

    server.auth.strategy('simple', 'basic', 'required', { validateFunc: validate });

    // Set up subscription

    server.subscription('/items', {
        filter: function (path, message, options, next) {

            return next(message.updater !== options.credentials.username);
        }
    });

    server.start(function (err) {
      console.log('listening on: http://127.0.0.1:'+process.env.PORT);

      setTimeout(function(){
        server.publish('/items', { id: 5, status: 'complete', updater: 'john' });
        server.publish('/items', { id: 6, status: 'initial', updater: 'steve' });
      }, 5000)

    });
});
