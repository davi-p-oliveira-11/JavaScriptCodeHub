const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function doubleThird () {

  const number = parseFloat(prompt("Enter a number "));

  const doubleOf =  number * 2;
  const thirdOf = number / 3;

  console.log(`The double of ${number} is ${doubleOf.toFixed(2)}`);
  console.log(`The third of ${number} is ${thirdOf.toFixed(2)}`);
}

doubleThird();
readline.question("Press Enter to Exit ... ");
