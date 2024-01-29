const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function brlToDollar() {
  const availableBRL = parseFloat(prompt("Enter a value in BRL: "));
  const usdValue = parseFloat(prompt("What is today's dollar exchange rate ?"));
  const dollars = availableBRL / usdValue;

  // toFixed(2) to work better with financial values

  console.log(`You can buy a total of ${dollars.toFixed(2)}USD`);
}

brlToDollar();
readline.question("Press Enter to Exit ...");

