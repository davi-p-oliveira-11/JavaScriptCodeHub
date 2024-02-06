const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function calculateGradeStatus() {
  const studentName = prompt("Enter the student name: ");

  const grade1 = parseFloat(prompt("Enter the grade for exam 1 "));
  const grade2 = parseFloat(prompt("Enter the grade for exam 2 "));

  const average = (grade1 + grade2) / 2;

  if (average <= 4.9) {
    console.log(
      `The student ${studentName} got an average of ${average.toFixed(1)} and FAILED !`
    );
    readline.question("Press Enter to Exit ...");
  } else if (average >= 5 && average <= 6.9) {
    console.log(
      `The student ${studentName} got an average of ${average.toFixed(1)} and needs to take the RECOVERY exam!`
    );
    readline.question("Press Enter to Exit ...");
  } else {
    console.log(
      `The student ${studentName} got an average of ${average.toFixed(1)} and has been APPROVED!`
    );
    readline.question("Press Enter to Exit ...");
  }
}

calculateGradeStatus();
