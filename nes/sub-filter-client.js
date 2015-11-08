var Nes = require('nes');

var server = 'ws://localhost:' + process.env.PORT;
var client = new Nes.Client(server);

// Authenticate as 'john'

client.connect({ auth: { headers: { authorization: 'Basic am9objpzZWNyZXQ=' } } }, function (err) {

    client.subscribe('/items', function (err, update) {
        // First publish is not received (filtered due to updater key)
        console.log(' - - - - - - - - - - - - - - - - - update:');
        console.log(update); // update -> { id: 6, status: 'initial', updater: 'steve' }
        console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
    });
});
