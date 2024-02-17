const readline = require("readline-sync");

function displayCountDown() {
  let counter = 31;

  while (counter >= 2) {
    counter--;
    if (counter % 4 === 0) {
      console.log(`[${counter}]`);
    } else {
      console.log(counter);
    }
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
