const { input } = require('./input');

const convertToDecimal = (binary) => {
  let decimal = 0;
  let twos = 1;
  
  for  (let i = binary.length - 1; i >= 0; i--) {
    binary[i] === 1 ? decimal += twos : null; 
    
    twos *= 2;
  }
  
  return decimal;
}

const lineLength = input[0].length;
const lines = input.length;

let gammaRate = [];
let epsilonRate = [];

for (let position = 0; position < lineLength; position++) {

  let count = 0;
  
  for (let i = 0; i < lines; i++) {
    const bit = input[i][position];
    
    bit === '1' 
          ? count += 1 
          : count -= 1;
  }
  
  count >= 0
        ? (gammaRate[position] = 1, epsilonRate[position] = 0) 
        : (gammaRate[position] = 0, epsilonRate[position] = 1);
}

// I now have the two numbers in binary, I need to convert them to decimal to multiply them 

console.log(`${convertToDecimal(gammaRate) * convertToDecimal(epsilonRate)}`);