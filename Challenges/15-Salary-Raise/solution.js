const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function raiseSalary() {
  const salary = parseFloat(prompt("What is the value of your salary ?"));

  const raiseAmount = salary * 0.15;
  const newSalary = salary + raiseAmount;

  console.log(`Your new salary with a 15% raise is equivalent to ${newSalary}`);
}

raiseSalary();
readline.question("Press Enter to Exit ... ");
