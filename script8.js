/* //Assignment operator

let a = 10;
a = a + 5; // a is now 15

console.log(a); // Output: 15

//Using shorthand assignment operator
a += 5; // a is now 20
console.log(a); // Output: 20



// -= operator
a -= 3; // a is now 17   (a = a - 3)
console.log(a); // Output: 17 */


function calculateTotal(){
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    let totalPrice = price*quantity;
    document.getElementById("totalPrice").value = totalPrice;

}

let calculate = document.getElementById("calculate");

calculate.addEventListener("click",calculateTotal);


 