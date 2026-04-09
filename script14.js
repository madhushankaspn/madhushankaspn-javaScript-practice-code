//Document Object Model (DOM)


//====getElementById()====

const heading = document.getElementById("heading");
heading.textContent = "Supun Madhusanka";
heading.style.color = "blue";
heading.style.fontFamily = "Arial";



//====getElementsByClassName()====

const section = document.getElementsByClassName("section");
for (let i=0;i<section.length;i++){

    section[i].style.color = "red";
    section[i].style.fontFamily = "Verdana";
    section[i].style.fontSize = "18px";

} 

//====getElementsByTagName()====

const imagarea = document.getElementById("imagarea");
const img = imagarea.getElementsByTagName("img");
for(let i=0; i<img.length;i++){
    img[i].style.width = "100%";
    img[i].style.maxHeight = "290px";
    img[i].style.objectFit = "cover";

}


//====querySelector()====

