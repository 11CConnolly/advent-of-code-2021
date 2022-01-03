const { input } = require('./input');

const lineLength = input[0].length;
const lines = input.length;

let gammaRate = "";
let epsilonRate = "";

for (let position = 0; position < lineLength; position++) {

  let count = 0;
  
  for (let i = 0; i < lines; i++) {
    const bit = input[i][position];
    
    bit === '1' 
          ? count += 1 
          : count -= 1;
  }
  
  count > 0
        ? (gammaRate += 1, epsilonRate += 0) 
        : (gammaRate += 0, epsilonRate += 1);
}

// Can use parseInt to convert between bases
const powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

console.log(powerConsumption);