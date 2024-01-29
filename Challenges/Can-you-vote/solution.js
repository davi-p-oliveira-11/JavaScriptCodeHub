const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function canYouVote() {
  const yearOfBirth = parseInt(prompt("What is the year of your birth? "));
  const currentYear = parseInt(prompt("What year are we in ? "));
  const userAge = currentYear - yearOfBirth;

  if (userAge >= 16) {
    console.log("You can already vote");
    readline.question("Press Enter to Exit");
  } else {
    console.log("You are not yet old enough to vote.");
    readline.question("Press Enter to Exit");
  }
}

canYouVote();
