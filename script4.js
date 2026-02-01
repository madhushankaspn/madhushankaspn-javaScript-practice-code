/* let employee={
    firstName:"Supun",
    LastName:"Madhushanka",
    age:24
}
console.log(employee);
console.log(employee.firstName);
console.log(employee.LastName);
console.log(employee.age); */


//Add avalue to object
/* let employee={
    firstName:"Supun",
    LastName:"Madhushanka",
    age:24
}
employee.country="Sri Lanka";
console.log(employee); */


//Edit value in object
/* let employee={
    firstName:"Supun",
    LastName:"Madhushanka",
    age:24
}
employee.country="Sri Lanka";
employee.LastName="Perera";
console.log(employee); */



let employee={
    firstName:"Supun",
    LastName:"Madhushanka",
    age:24,
    getmsg:function(s1){
        alert(s1+" " +this.LastName);
    }
}
console.log(employee.getmsg("Supun"));