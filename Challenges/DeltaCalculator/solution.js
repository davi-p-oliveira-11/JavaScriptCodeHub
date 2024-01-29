const prompt = require("prompt-sync")();
const readline = require("readline-sync");

// Initial Commit

function deltaCalc() {
  const valueA = parseInt(prompt("Enter the value of A "));
  const valueB = parseInt(prompt("Enter the value of B "));
  const valueC = parseInt(prompt("Enter the value of C "));

  /* Bhaskara's formula:  delta = b² - 4ac */
  const deltaValue = valueB ** 2 - 4 * (valueA * valueC);

  console.log(`The value of delta is equal to: ${deltaValue}`);
}

deltaCalc();
readline.question('Press Enter to Exit ...');
