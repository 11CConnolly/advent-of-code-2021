const { input } = require('./input');

let minFuelCost = Infinity;
let maxCrabPosition = 0;

// Find the maxmimum crab position
for (const crab of input) {
  if (crab > maxCrabPosition)
    maxCrabPosition = crab;
}

for (let i = 0; i < maxCrabPosition; i++) {
  let total = 0;
  
  // Go through and find each crab
  for (let crab = 0; crab < input.length; crab++) {
    total += Math.abs(i - input[crab]);
  }
  
  // Check the lowest fuel cost so far
  if (total < minFuelCost)
    minFuelCost = total;    
}

console.log(minFuelCost);