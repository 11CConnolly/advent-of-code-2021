const { input } = require('./input');

let COUNT_UNIQUE = 0;
const uniqueLengths = [2, 3, 4, 7]

input.map(line => {
  const signals = line[0].split(" ");
  const output = line[1].split(" ");
  
  output.map(s => {
    uniqueLengths.includes(s.length) && (COUNT_UNIQUE++)
  })
});

console.log(COUNT_UNIQUE);