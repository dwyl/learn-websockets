var Nes = require('nes');

var server = 'ws://localhost:' + process.env.PORT;
var client = new Nes.Client(server);

client.connect(function (err) {

    client.subscribe('/item/5', function (err, update) {
      console.log(' - - - - - - - - - - - - - - - - - update:');
      console.log(update); // update -> { id: 5, status: 'complete' }
      console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
        // Second publish is not received (doesn't match)
    });
});
