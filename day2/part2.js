const {input} = require("./input.js");

const instructions = input.map(x => x.split(/[ ,]+/));

let horizDiff = 0
let vertDiff = 0

for (let i = 0; i < instructions.length; i++) {

  const instruction = instructions[i][0];
  const distance = Number(instructions[i][1]);
  
  switch (instruction) {
    case "forward": 
      horizDiff += distance;
      break;
    case "down": 
      vertDiff += distance;
      break;
    case "up": 
      vertDiff -= distance;
      break;
  }
}

console.log(horizDiff * vertDiff);