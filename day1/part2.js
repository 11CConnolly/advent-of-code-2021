const { input } = require('./input');

let count = 0;
  
for (let i = 0; i < input.length - 3; i++) {

  const windowA = input[i] + input[i+1] + input[i + 2];
  const windowB = input[i + 1] + input[i+2] + input[i + 3];
  
  // Alternative, could make this let a = ..., b = ..., c = ..., d = ...
  // Then sum a + b + c against b + c + d
  
  if (windowA < windowB) {
    count++;
  }
}

console.log(count);