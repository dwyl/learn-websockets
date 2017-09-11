# Learn WebSockets

Learn how to use WebSockets to create real-time apps.

## Why?

***Instant feedback*** in your apps!


## What?

> "_**WebSocket** is a computer communications **protocol**, 
providing **full-duplex communication** channels 
over a **single TCP connection**._"

WebSockets allow us to build web/mobile applications where
data can be sent between client (browser/app) and web server 
in a much more _efficient_ way than "_traditional_" HTTP. 
When a client connects to the WebSocket-enabled server 
it can send and receive messages with *minimal* overhead. 
_Crucially_ where HTTP is a (stateless) request-response protocol, 
WebSockets allow the client to ***subscribe*** to a stream of data,
which means that updates can be receive after the initial
response. This makes WebSockets _perfect_ for building ***Real-Time Apps***!


## *How* ?



## Background Reading

+ Wikipedia article: https://en.wikipedia.org/wiki/WebSocket 
(_a bit text-heavy but good history lesson._)

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
