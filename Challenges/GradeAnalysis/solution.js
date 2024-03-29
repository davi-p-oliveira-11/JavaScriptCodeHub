const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function analyzeGrades() {
  const grade1 = parseFloat(prompt("Enter the grade for test 1: "));
  const grade2 = parseFloat(prompt("Enter the grade for test 2: "));
  const average = (grade1 + grade2) / 2;

  console.log(`The average of the tests is ${average.toFixed(1)}`);

  if (average >= 7) {
    console.log("Congratulations, you have passed ! ");
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log("Sorry, you have failed.");
    readline.question("Press Enter to Exit ... ");
  }
}

analyzeGrades();
readline.question("Press Enter to Exit ... ");
