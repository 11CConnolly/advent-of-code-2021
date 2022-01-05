const fs = require("fs");

const lines = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/);

// Get array of numbers
const pickNumbers = lines[0];

// Get array of boards
const boardLines = lines.slice(2).map(x => x.trim().split(/\s+/));
let boards = [];
let currentBoard = 0;

for (let i = 0; i <= boardLines.length; i+= 6) {
  let newBoardsLine = [];
  for (let j = 0; j < 5; j++) {
    newBoardsLine.push(boardLines[i + j].slice());
  }
  boards[currentBoard] = newBoardsLine;
  currentBoard++;
}

const input = {
  pickNumbers,
  boards
}

module.exports = {
  input,
}