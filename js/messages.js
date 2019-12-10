const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + minutes;
}

module.exports.messages = {
    "привет" : "привет",
    "как дела?" : "отлично, я же бот",
    "который час?" : hours + ":" + minutes,
    "как тебя зовут?" : "меня зовут бот Андрей",
    "пока" : "до свидания",
};

