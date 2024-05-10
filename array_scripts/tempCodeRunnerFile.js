console.log();
console.log("Question 3: Do we carry 'swedish fish?");
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4) {
    console.log(`The ${products[i].product} candy costs less than $4`);
  }

  //end of the loop
}