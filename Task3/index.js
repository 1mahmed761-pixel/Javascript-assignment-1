let a = prompt("Entre shopping amount input:");
if (a >= 5000) {
    let discount =(a * 15) / 100;
    let finalamount = a - discount;
    alert("Shopping" +" " + a);
    alert("Discount" +" " + discount); 
} else{
    let discount =(a * 5) / 100;
    let finalamount = a - discount;
    alert("Shopping" +" " + a);
    alert("Discount" +" " + discount); 
    

}