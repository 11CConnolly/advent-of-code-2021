const {input} = require("./input.js");

const instructions = input.map(x => x.split(/[ ,]+/));

let aim = 0;
let horizontalDifference = 0;
let verticalDifference = 0;

for (let i = 0; i < instructions.length; i++) {

  const instruction = instructions[i][0];
  const distance = Number(instructions[i][1]);
  
  switch (instruction) {
    case "forward": 
      horizontalDifference += distance;
      verticalDifference += distance * aim;
      break;
    case "down": 
      aim += distance;
      break;
    case "up": 
      aim -= distance;
      break;
  }
}

console.log(`${horizontalDifference} and ${verticalDifference} with aim ${aim} for a final answer of ${horizontalDifference * verticalDifference}`);