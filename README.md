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

### Publish Subscribe with Auth-based Filter

Same again, ***2 terminal windows*** (*note: have them both ready at the same time...*)

1. Boot the server:
```sh
PORT=8000 node nes/sub-filter-server.js
```

2. Then run the client :
```sh
PORT=8000 node nes/sub-filter-client.js
```


## FAQ

### Can we use WebSockets *Every where*?

Sadly, no.
http://caniuse.com/#feat=websockets
<img width="1181" alt="caniuse-websockets" src="https://cloud.githubusercontent.com/assets/194400/11025872/3d21e5c8-8699-11e5-9860-fc1a2c0179fb.png">

### Can we *ignore* Opera Mini...?

Apparently not... **Opera Mini** accounts for almost ***5%*** of
the market!

http://caniuse.com/usage-table
![caniuse-stats](https://cloud.githubusercontent.com/assets/194400/11025955/a1f0fcb8-869a-11e5-8f5e-774d344fc1fd.png)

More detailed trend: https://www.netmarketshare.com/browser-market-share.aspx?qprid=1&qpcustomb=1
![mobile-stats-opera-mini](https://cloud.githubusercontent.com/assets/194400/11025957/a34837f2-869a-11e5-9cea-298c3a470ca8.png)
> Where are all the Opera Mini users? http://raddevon.com/articles/where-are-opera-mini-users
