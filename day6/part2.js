const { input } = require('./input');

const MAX_DAYS = 256;
const fishesEachDay = new Array(MAX_DAYS).fill(0);

// Fill the fishes each day with the initial spawn

for (let i = 0; i < input.length; i++) {
  let fishLife = input[i];
  for (let day = 0; day < MAX_DAYS; day++) {
    if (fishLife === 0) {
      fishesEachDay[day]+=1;
      fishLife = 7;
    }
    fishLife--;
  }
}

// Then let it do it's thing

for (let day = 0; day < MAX_DAYS; day++) {
  let dailySpawn = fishesEachDay[day];
  let life = day + 9;
  for (let i = life; i < MAX_DAYS; i+=7) {
    fishesEachDay[i] += dailySpawn;
  }
}

const totalFish = fishesEachDay.reduce((previousVal, currentVal) => previousVal + currentVal) + input.length;

console.log(totalFish);

// Rewrite the problem in different ways, restate the problem, redraw the problem in different ways
// Try and spot patterns in answers, test runs, solutions
// I am a programming demi-god