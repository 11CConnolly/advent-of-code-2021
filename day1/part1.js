const { input } = require('./input');

const countIncreasingDepths = (inputArray) => {

  let count = 0;  

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] < inputArray[i+1]) {
      count++;
    }
  }
  
  return count;
}

console.log(countIncreasingDepths(input));