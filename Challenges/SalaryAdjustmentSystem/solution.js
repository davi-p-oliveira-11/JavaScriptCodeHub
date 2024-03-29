const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function salaryAdjustmentCalc() {
  const employeeName = prompt("Enter the employee's name ");
  const salary = parseFloat(prompt("Enter the value of your salary."));
  const yearsWorked = parseInt(
    prompt("Enter how many years you have been working at the company. ")
  );

  const increase3 = salary * 0.03;
  const increase12 = salary * 0.125;
  const increase20 = salary * 0.2;

  if (yearsWorked < 3) {
    console.log(
      `The employee ${employeeName} has ${yearsWorked} years of experience and will receive a 3% increase, resulting in a salary of ${
        salary + increase3
      } USD.`
    );
    readline.question("Press Enter to Exit ... ");
  } else if (yearsWorked >= 3 && yearsWorked < 10) {
    console.log(
      `The employee ${employeeName} has ${yearsWorked} years of experience and will receive a 12.5% increase, resulting in a salary of ${
        salary + increase12
      } USD`
    );
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log(
      `The employee ${employeeName} has ${yearsWorked} years of experience and will receive a 20% increase, resulting in a salary of ${
        salary + increase20
      } USD.`
    );
    readline.question("Press Enter to Exit ... ");
  }
}

salaryAdjustmentCalc();
