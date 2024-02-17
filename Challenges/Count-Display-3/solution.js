const readline = require("readline-sync");

function displayCountDown() {
  let counter = 0;

  while (counter <= 18) {
    console.log(counter);
    counter += 3;
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ...');
}

displayCountDown();
