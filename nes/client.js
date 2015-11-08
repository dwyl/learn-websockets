var Nes = require('nes');
// console.log(process.env.PORT)
var server = 'ws://localhost:' + process.env.PORT;
var client = new Nes.Client(server);
client.connect(function (err) {
  client.request('hello', function (err, payload) {   // Can also request '/h'
    console.log(' - - - - - - - - - - - - - - - - - payload:');
    console.log(payload); // payload -> 'world!'
    console.log(' - - - - - - - - - - - - - - - - - - - - - - ');
  });
});
