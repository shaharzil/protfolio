'use strict';
console.log('Ex 11');

// Rolling Project: BankSystem
// a) Initialize a variable: currBalance with the value: 1000
// b) prompt for the user secret pin code and how much he would
// like to withdraw, and then print a nice message with the new
// balance.
// o Check that the secret pin code is '0796', if not, tell the user its
// wrong and don’t let him withdraw
// o Add feature: don’t let the user withdraw more than he has in
// the account

var currentBalanc = 1000

var pinCode = prompt ('Please enter your pin code')
var moneyWithdraw = +prompt ('How much money you would like to withdarw?')

if ((pinCode !== '0796' ) || (moneyWithdraw > currentBalanc)) {
console.log ('You cant withdraw')}
else{
currentBalanc -= moneyWithdraw
console.log ('Hi there, your new balance is: ' + currentBalanc )
}