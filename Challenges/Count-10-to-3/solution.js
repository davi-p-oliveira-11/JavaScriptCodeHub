const readline = require('readline-sync');

function displayCountDown() {
  let counter = 10;

  while (counter >= 3) {
    console.log(counter);
    counter--;
  }

  console.log("Done !");
  readline.question('Press Enter to Exit ... ');
}

displayCountDown();
