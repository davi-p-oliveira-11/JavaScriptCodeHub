const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function measureCalc() {
  const meters = parseFloat(prompt("Digite uma distancia em metros "));

  const kilometers = meters / 1000;
  const hectometers = meters / 100;
  const decameters = meters / 10;
  const decimeters = meters * 10;
  const centimeters = meters * 100;
  const millimeters = meters * 1000;

  console.log(`A distancia de ${meters.toFixed(2)}m corresponde a:
  ${kilometers.toFixed(5)} Km
  ${hectometers.toFixed(4)}Hm
  ${decameters.toFixed(3)} Dam
  ${decimeters.toFixed(1)} dm
  ${centimeters.toFixed(1)}cm
  ${millimeters.toFixed(1)}mm`);
}

measureCalc();
readline.question('Press Enter to Exit ... ');
