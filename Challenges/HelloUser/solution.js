const prompt = require('prompt-sync')();
const readline = require('readline-sync');

// Initial Commit

function helloUser () {
  const userName = prompt('What is your name ? ' );

  console.log(`Hello ${userName} nice to meet you !`);
}

helloUser();
readline.question("Press Enter to Exit ... ");
