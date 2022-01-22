const { input } = require('./input');

input.sort((a, b) => a - b);

let medianIndex = Math.floor(input.length / 2);

// Calculate fuel
let middle = 0;

if (input.length % 2 === 0) {
  middle = ((input[medianIndex - 1] + input[medianIndex]) / 2)
} else {
  middle = input[medianIndex];
}

console.log(input);
console.log("===");

// Calculate fuel
let totalFuel = 0;

for (let crab = 0; crab < input.length; crab++) {
  let distance = Math.abs(input[crab] - middle);
  console.log(distance);
  for (let i = 0; i <= distance; i++) {
    totalFuel += i;
  }
}

console.log(totalFuel);