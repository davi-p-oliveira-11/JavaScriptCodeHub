const readline = require("readline-sync");

function displayCountDown() {
  let counter = 6;

  while (counter <= 11) {
    console.log(counter);
    counter++;
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
