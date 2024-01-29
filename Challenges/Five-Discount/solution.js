const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function fiveDiscount() {
  const productPrice = parseFloat(
    prompt("What is the price of the product ? ")
  );

  const discount = productPrice * 0.05;
  const finalPrice = productPrice - discount;

  console.log(`O preço do produto é: ${productPrice}, 
  e o preço promocional do produto é ${finalPrice}`);
}

fiveDiscount();
readline.question("Press Enter to Exit ...");
