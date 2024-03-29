const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function quitSmoking() {
  const cigarsPerDay = parseInt(
    prompt("How many cigarettes do you smoke per day ? ")
  );
  const yearsSmoking = parseInt(
    prompt("For how many years have you been smoking ? ")
  );

  const totalOfCigarretes = cigarsPerDay * 365 * yearsSmoking; // 1 year = 365 days

  const minutesLost = totalOfCigarretes * 10; // Time lost for smoking 1 cigarette.

  const daysLost = minutesLost / 1440; // Minutes that fit in one day.

  console.log(`You have already lost ${daysLost.toFixed(1)} days of life.`);
}

quitSmoking();
readline.question("Press Enter to Exit ... ");
