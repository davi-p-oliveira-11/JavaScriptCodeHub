const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function areaCalculator() {
 
  const width = parseFloat(prompt('What is the width of the wall? (Enter a value in meters)' ));
  const height  = parseFloat(prompt('What is the height of the wall? (Enter a value in meters) '));

  const area = width * height;
  const paintNeeded = area * 0.5;

  console.log(`The area of the wall to be painted is ${area}m²,
  and the amount of paint needed to paint the wall is ${paintNeeded} liters.`);
}

areaCalculator();
readline.question("Press Enter to Exit ... ");
