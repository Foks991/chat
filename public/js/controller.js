function setServerState(elem, value, color) {
    elem.innerHTML = value;
    elem.style.color = color;
}

function botMessages(value) {
    div = document.createElement('div');
    img = document.createElement('img');
    text = document.createElement('div');
    time = document.createElement('p');
    div.setAttribute('id', 'bot');
    img.setAttribute('class', 'bot-avatar');
    img.setAttribute('src', "static/img/user.png");
    text.setAttribute('class', 'bot-text');
    time.setAttribute('class', 'bot-time');
    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(time);
    messages.appendChild(div);
    time.innerHTML = new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? ('0' + new Date().getMinutes()) :  new Date().getMinutes());
    text.innerHTML = value;
    if (value === "goodbye"){
        ws.close()
    }
}

function clientMessages(value) {
    div = document.createElement('div');
    time = document.createElement('p');
    text = document.createElement('div');
    img = document.createElement('img');
    div.setAttribute('id', 'client');
    time.setAttribute('class', 'client-time');
    text.setAttribute('class', 'client-text');
    img.setAttribute('class', 'client-avatar');
    img.setAttribute('src', "static/img/user.png");
    div.appendChild(time);
    div.appendChild(text);
    div.appendChild(img);
    messages.appendChild(div);
    time.innerHTML = new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? ('0' + new Date().getMinutes()) :  new Date().getMinutes());
    text.innerHTML = value;
}