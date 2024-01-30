const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function checkSpeed() {
  const carSpeed = parseInt(prompt("What is the speed reached by the car ? "));

  const excessSpeed = carSpeed - 80;
  const fineAmount = excessSpeed * 5;

  if (carSpeed > 80) {
    console.log(`The car reached a speed of ${carSpeed} km/h,
    exceeding ${excessSpeed} km/h of the allowed speed.
    The driver will have to pay a fine of ${fineAmount} USD.`);
    readline.question("Press Enter to Exit ... ");
  } else {
    console.log(`The driver did not exceed the speed limit,
    therefore, they will not pay a fine.`);
    readline.question("Press Enter to Exit ... ");
  }
}

checkSpeed();
