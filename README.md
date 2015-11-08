# learn-websockets

Learn how to use WebSockets to create real-time apps.

## Hapi*NES*

To run the examples you will need ***two terminal windows***
(*one to run the server.js and the other for client.js*)

### Simple Connection to Server

In the first terminal window, boot the server:
```sh
PORT=8000 node nes/server.js
```

Then in the second window run the client:
```sh
PORT=8000 node nes/client.js
```


### Publish Subscribe

Same again, ***2 terminal windows*** (*note: have them both ready at the same time...*)

1. Boot the server:
```sh
PORT=8000 node nes/pubsub-server.js
```

2. Then run the client :
```sh
PORT=8000 node nes/pubsub-client.js
```
