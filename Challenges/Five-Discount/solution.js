const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function fiveDiscount() {
  const productPrice = parseFloat(
    prompt("What is the price of the product ? ")
  );

  const discount = productPrice * 0.05;
  const finalPrice = productPrice - discount;

  console.log(`The original price of the product is: ${productPrice}, 
and the price with discount is: ${finalPrice}`);
}

fiveDiscount();
readline.question("Press Enter to Exit ...");

