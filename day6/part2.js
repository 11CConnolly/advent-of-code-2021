const { input } = require('./input');

// [3, 4, 3, 1, 2]

let count = 0;

while (count < 80) {
  // Maybe can refactor this to filter out all the 0s then each time add an 8? 
  for (let i=0;i<input.length;i++) {
    if (input[i] === 0) {
      input[i] = 7;
      input.push(9);
    }
    input[i]--;
  }
  
  count++;
}
 
console.log(input.length);