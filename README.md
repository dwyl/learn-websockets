# Learn WebSockets

Learn how to use WebSockets to create real-time apps.

## Why?

Instant feedback in your apps.

## What?

WebSockets allows you to build web/mobile applications where
data can be sent between client/server in a much more
*efficient* way than "*traditional*" HTTP. When a client
connects to the WebSocket-enabled server it can send and receive
messages with *minimal* overhead. *Crucially* where HTTP
is a (stateless) request-response protocol, WebSockets
allow the client to ***subscribe*** to a stream of data,
which means that updates can be receive after the initial
response. This makes WebSockets *perfect* for building ***Real-Time Apps***!

# *How* ?

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
