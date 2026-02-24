/* function firstFunction(a,b){
    console.log(a+b);

}
firstFunction(2,6);
firstFunction(3,7);
firstFunction(4,8);
firstFunction(5,9); */




function firstFunction(a,b){
    return a+b;

}

let total = firstFunction(10,5);
if(total>10){
    alert("Total greater than 10");
}else{
    alert("Total less than or equal to 10");
}