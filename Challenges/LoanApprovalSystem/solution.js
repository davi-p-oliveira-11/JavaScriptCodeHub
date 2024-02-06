const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function checkLoanEligibility() {
  const houseValue = parseFloat(prompt("Enter the value of the house "));
  const salary = parseFloat(prompt("Enter the value of your salary: "));
  const yearsPaying = parseInt(
    prompt("In how many years do you plan to pay off the value of the house?")
  );

  // Convert the value from years to months
  const months = yearsPaying * 12;
  // Calculate the installment price
  const installment = houseValue / months;

  if (installment > salary * 0.3) {
    console.log("Unfortunately, we will not be able to grant you the loan. ");
    readline.question('Press Enter to Exit ... ')
  } else {
    console.log("Congratulations, your loan has been approved ! ");
    readline.question('Press Enter to Exit ... ')
  }
}

checkLoanEligibility();
