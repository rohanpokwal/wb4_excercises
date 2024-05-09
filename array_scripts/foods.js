"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function calculateSubTotal(productLists) {
  let subTotal = 0;
  for (let i = 0; i < productLists.length; i++) {
    subTotal += productLists[i].price;
  }
  return subTotal;
}

function calculateTax(subTotal) {
  let total = subTotal * 0.08;
  return total;
}

function calculateTip(total) {
  let tip = total * 0.18;
  return tip;
}

let subTotal = calculateSubTotal(lunch);
let tip = calculateTip(subTotal);
let tax = calculateTax(subTotal);
let totalDue = subTotal + tip + tax;

console.log(`
Subtotal: $ ${subTotal.toFixed(2)}
Tax: $ ${tax.toFixed(2)}
Tip: $ ${tip.toFixed(2)}
Total Due: $ ${totalDue.toFixed(2)}
`);
