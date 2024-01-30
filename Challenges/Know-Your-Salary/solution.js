const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function knowSalary() {
  const daysWorked = parseInt(
    prompt("How many days did you work last month ? ")
  );
  const dayOfWork = 8 * 25;
  const employeeSalary = daysWorked * dayOfWork;

  console.log(`The employee worked for ${daysWorked} days and will 
  receive a salary of ${employeeSalary} USD.`);
}

knowSalary();
readline.question("Press Enter to Exit ... ");
