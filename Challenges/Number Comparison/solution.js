const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function numberComparison() {
  const num1 = parseInt(prompt("Enter a number "));
  const num2 = parseInt(prompt("Enter another number "));

  if (num1 > num2) {
    console.log(`The first value is greater.`);
    readline.question("Press Enter to Exit ... ");
  } else if (num1 < num2) {
    console.log(`The second value is greater.`);
    readline.question("Press Enter to Exit ... ");
  } else if (num1 === num2) {
    console.log(`There is no greater value, both are equal.`);
    readline.question("Press Enter to Exit ... ");
  }
}

numberComparison();
