const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function successorPredecessor() {
  const num = parseInt(prompt("Enter a number "));

  const predecessor = num - 1;
  const successor = num + 1;

  console.log(
    `The predecessor of ${num} is ${predecessor}\n The successor of ${num} is ${successor}`
  );
}

successorPredecessor();
readline.question("Press Enter to Exit ... ");
