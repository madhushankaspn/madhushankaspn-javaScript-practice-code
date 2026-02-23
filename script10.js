const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    let txt1= document.getElementById("txt1").value;
    let txt2=document.getElementById("txt2").value;

    let total=Number(txt1)+Number(txt2);
    
    document.getElementById("total").innerText=total;

})