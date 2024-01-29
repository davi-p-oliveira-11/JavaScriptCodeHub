const prompt = require('prompt-sync')();
const readline = require('readline-sync');

// update this to be dinamic like in the C program

function brlToDollar () {

const availableBRL = parseFloat(prompt('Enter a value in BRL: '));
const dollars = availableBRL / 3.45; 

// toFixed(2) to work better with financial values

console.log(`'You can buy a total of ${dollars.toFixed(2)}USD`);

}

brlToDollar();
readline.question('Press Enter to Exit ...')
