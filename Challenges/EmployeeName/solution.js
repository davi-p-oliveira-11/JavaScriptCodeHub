const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function employeeName() {
  const employeeName = prompt("What is the employee name ? ");
  const currentMonth = prompt("What is the current month? ");
  const salaryValue = parseFloat(
    prompt("What is the value of the employee salary ? ")
  );

  console.log(
    `Employee ${employeeName} has a salary of ${salaryValue} USD in ${currentMonth}`
  );
}

employeeName();
readline.question("Press Enter to Exit ... ");
