const { input } = require('./input');

input.sort((a, b) => a - b);

let medianIndex = Math.floor(input.length / 2);
let middle = 0;

(input.length % 2 === 0)
  ? middle = ((input[medianIndex - 1] + input[medianIndex]) / 2)
  : middle = input[medianIndex];

let minFuelCost = 0;

for (let crab = 0; crab < input.length; crab++) {
  minFuelCost += Math.abs(input[crab] - middle)
}

console.log(minFuelCost);