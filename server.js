let answer;

const http = require("http")
const express = require("express")
const WebSocket = require("ws")
const path = require('path');
const mass = require("./public/js/messages").messages;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use('/static', express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

wss.on('connection', ws => {
  ws.on('message', message => {
    wss.clients.forEach(client => {
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

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
