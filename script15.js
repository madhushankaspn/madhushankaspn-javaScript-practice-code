//setInterval()

const timer = document.getElementById("timer");

function getTime(){
    let a = new Date().toLocaleTimeString();
    timer.textContent = a;
}

setInterval(getTime, 1000);

