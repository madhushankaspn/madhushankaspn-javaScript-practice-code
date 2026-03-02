//for loop example
/* for(let i=0; i<=20; i+=2){

    if(i===0){

    continue;
    }


    if(i===14){
        break;
    }
   console.log(i);
}
  */





//while loop example

/* let i=1;

while(i<20){
    console.log(i);
    i++;
} */





//do while loop

/* let i=0;
do{
    console.log(i);
    i++;

}while(i<10); */






//forEach loop
   //======display all the elements of the array======

/*  const arr=[10,32,66,22,90];

 arr.forEach((Number)=>{
    console.log(Number);
 }) */


//======sum of all the elements of the array======
/* const arr=[10,32,66,22,100];

let sum =0;

 arr.forEach((Number)=>{
    sum+=Number;

 })
 console.log("Total = " + sum); */






 //for in loop

 const employee = {
    name: "supun",
    age: 24,
    position: "developer"
 }
 for( const key in employee){
    console.log(key + " : " + employee[key]);
 }