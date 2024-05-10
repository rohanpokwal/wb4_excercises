"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Hershey", price: 1.0 },
  { product: "Skittles", price: 0.99 },
  { product: "Twix", price: 2.6 },
  { product: "Milky way", price: 3.8 },
  { product: "Reese's", price: 3.0 },
];

//This is gonna be a loop that searches the Products Array
let productsArrayLength = products.length; //this returns the length of array

console.log("Question 1: which candies costs Less than $4?");
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4) {
    console.log(`The ${products[i].product} candy costs less than $4`);
  }

  //end of the loop
}

console.log();
console.log("Question 2: Which candies has 'M&M' in its name?");
for (let i = 0; i < products.length; i++) {
  if (products[i].product.indexOf("M&Ms") !== -1) {
    console.log(`The ${products[i].product} has 'M&Ms in it`);
  }

  //end of the loop
}

console.log();
console.log("Question 3: Do we carry 'swedish fish?");
for (let i = 0; i < products.length; i++) {
  if (products[i].product === "Swedish Fish") {
    console.log(`Yes we do carry ${products[i].product}`);
  }

  //end of the loop
}
