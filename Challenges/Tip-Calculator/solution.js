const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function tipCalculator() {
  const bill = parseFloat(prompt("What is the bill ? "));
  const tipPercentage = parseFloat(
    prompt("What is the percentage of the tip ? ")
  );

  const tipInDecimals = tipPercentage / 100;
  const tipValue = bill * tipInDecimals;
  const totalPrice = bill + tipValue;

  console.log(`The tip is $${tipValue.toFixed(2)}`);
  console.log(`The total value of the bill is $${totalPrice.toFixed(2)}`);
}

tipCalculator();
readline.question("Press Enter to Exit ... ");
