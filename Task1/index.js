let balance = Number(prompt("Entre your account balance:"));
let withdraw = Number(prompt("Entre withdrawl amount:"));

if (withdraw <= balance) {
    let remaining = balance - withdraw;
    alert("Account Balance: " + balance);
    alert("Withdrawal: " + withdraw);
    alert("Remaining Balance: " + remaining);
} else {
    alert("Insufficient Balance!");
}
