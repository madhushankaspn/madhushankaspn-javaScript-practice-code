//event handlers

const btn = document.getElementById("btn");

btn.onclick = function(){
   // console.log("first click");
}

btn.onclick = function(){
    //console.log("second click");
} 

//only the second click will be executed because the first one is overwritten by the second one.







//event listeners

btn.addEventListener("click",function(){
    //console.log("first click");

})

btn.addEventListener("click",function(){
    //console.log("second click");
})

btn.addEventListener("click",function(){
    //console.log("third click");
})



window.addEventListener("offline",function(){
    alert("sorry we are offline")
});

window.addEventListener("online",function(){
    alert("we are back online") 
});




