const ws = new WebSocket('ws://localhost:5000')

ws.onopen = () => setServerState(serverState,'ONLINE', 'lime');
ws.onclose = () => setServerState(serverState,'DISCONNECTED','orange');
ws.onmessage = (response) =>  {
    if(message[response.data] === undefined){
        botMessages("<a target='_blank' style='text-decoration: none' href=http://google.com>Google.com</a>");
    }else{
        botMessages(message[response.data]);
    }
    typing.classList.toggle('isActive');
};

form.addEventListener('submit', e=>{
    e.preventDefault();
    clientMessages(input.value);
    typing.classList.toggle('isActive');
    ws.send(input.value);
    input.value = '';
});
