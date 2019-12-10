const WebSocket = require("ws");
const mass = require("./messages").messages;
let answer;

const port = 5000;
const server = new WebSocket.Server({ port });

server.on("connection", ws => {
  ws.on("message", message => {
      server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
            answer = mass[message];
            if(answer === undefined){
                client.send("поищи здесь - " + '<a target=\'_blank\' style=\'text-decoration: none\' href=http://google.com>Google.com</a>');
            }else{
                client.send(answer);
            }
        }
      });
    });
});



