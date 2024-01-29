const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function averageOfTwo() {
  const grade1 = parseFloat(prompt("Enter the first grade "));
  const grade2 = parseFloat(prompt("Enter the second grade "));

  const average = (grade1 + grade2) / 2;

  console.log(
    `The average between ${grade1} and ${grade2} is equal to ${average.toFixed(1)}`
  );
}

averageOfTwo();
readline.question("Press Enter to Exit ... ");

// Initial commir

