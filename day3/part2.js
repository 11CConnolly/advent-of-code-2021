let { input } = require('./input');

const findRates = (array, isGammaRate) => {

  let lineLength = array[0].length
  let currentArray = array;
  
  for (let position = 0; position < lineLength; position++) {
  
    let count = 0;
    let lines = currentArray.length;  
    
    for (let i = 0; i < lines; i++) {
      const bit = currentArray[i][position];
      
      bit === '1' 
            ? count += 1 
            : count -= 1;
    }
    
    // isGammaRate
    const mostCommonBit = count >= 0 ? '1' : '0'
    
    if (isGammaRate) {
      currentArray = currentArray.filter(x => x[position] === mostCommonBit)
    } else {
      currentArray = currentArray.filter(x => x[position] !== mostCommonBit)
    }
    
    lines = currentArray.length;
    
    if (lines === 1) break;
  }
  
  return currentArray;
}

console.log(parseInt(findRates(input, false), 2) * parseInt(findRates(input, true), 2));