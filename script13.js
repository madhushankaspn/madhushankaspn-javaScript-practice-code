//event handlers

const btn = document.getElementById("btn");

btn.onclick = function(){
    console.log("first click");
}

btn.onclick = function(){
    console.log("second click");
}

//only the second click will be executed because the first one is overwritten by the second one.