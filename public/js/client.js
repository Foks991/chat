const ws = new WebSocket('ws://speaktome.eu-4.evennode.com/');
//const ws = new WebSocket('ws://localhost:5000/');
const afkMassage = ['ты тут?', 'через 3 секунды я уйду', 'goodbye'];
const afkTime = [15000, 30000, 45000];
const timeOutId = [];
let inputValue;
let isTrue = true;

ws.onopen = () => setServerState(serverState,'ONLINE', 'lime');
ws.onclose = () => setServerState(serverState,'DISCONNECTED','orange');

form.addEventListener('submit', e=>{
    e.preventDefault();
    inputValue = input.value;
    ws.send(inputValue);
    for (let i = 0; i < 3; i++){
        clearTimeout(timeOutId[i]);
        timeOutId[i] = setTimeout(function () {
            botMessages(afkMassage[i]);
        }, afkTime[i]);
    }
});

ws.onmessage = (response) =>  {
    if(isTrue){
        clientMessages(response.data);
        input.value = '';
        isTrue = false;
    }else{
        setTimeout( ()=> {
            if(response.data === "time"){
                botMessages(new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? ('0' + new Date().getMinutes()) :  new Date().getMinutes()));
            }else{
                botMessages(response.data);
            }
        }, 1000);
        isTrue = true;
    }
};



