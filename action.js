let text = document.getElementById("main-text");
let user_name = prompt("Please type your name");
let second = setInterval(timer, 1000);
let current_date = new Date();
let today = current_date.toLocaleString("default", {weekday: "long"});
let time;


function timer(){
    current_date = new Date();
    time = current_date.getHours() + ":" + current_date.getMinutes() + ":" + current_date.getSeconds();
    text.innerHTML = `Welcome ${user_name}, ${time} ${today}`;
}



