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
    img.setAttribute('src', 'img/user.png');
    text.setAttribute('class', 'bot-text');
    time.setAttribute('class', 'bot-time');
    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(time);
    text.innerHTML = value;
    messages.appendChild(div);
    time.innerHTML = hours + ":" + minutes;
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
    img.setAttribute('src', 'img/user.png');
    div.appendChild(time);
    div.appendChild(text);
    div.appendChild(img);
    text.innerHTML = value;
    messages.appendChild(div);
    time.innerHTML = hours + ":" + minutes;
}