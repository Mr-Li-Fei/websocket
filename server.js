const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8080});

server.on('open', () => {
    console.log('connected');
})

server.on('close', () => {
    console.log('close');
});

server.on('connection', (ws, req) =>　{
    ws.on('message', (msg) => {
        if(!msg) {
          return;
        }
        console.log(msg.toString(), 333);
    })
    ws.send('我收到值了');
});