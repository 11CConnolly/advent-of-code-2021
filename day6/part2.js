const { input } = require('./input');

const { pickNumbers, boards } = input;

const checkRowOrColumnIsComplete = (schlength) => {
  return schlength.slice().filter(x => x === "-1").length === 5;
}

const boardIsComplete = (board) => {
  for (let i = 0; i < 5; i++) {
    let rowLine = [];
    for (let j = 0; j < 5; j++) {
      rowLine.push(board[i][j]);
    }
    
    if (checkRowOrColumnIsComplete(rowLine)) return true;
  }
  
  for (let i = 0; i < 5; i++) {
    let columnLine = [];
    for (let j = 0; j < 5; j++) {
      columnLine.push(board[j][i]);
    }
    
    if (checkRowOrColumnIsComplete(columnLine)) return true;
  }
  
  return false;
}

const markBoard = (board, pick) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (Number(board[i][j]) === pick) {
        board[i][j] = "-1";
        return true;
      }
    }
  }
  
  return false;
}

const winningOrder = [];
let finalPickedNumber = 0;

const findLastWinningBoard = (numbers, boards) => {
  for (let pick of numbers) {
    for (let i = 0; i < boards.length; i++) {
      if (winningOrder.indexOf(i) !== -1) {
        continue;
      }
      if (markBoard(boards[i], pick) && boardIsComplete(boards[i])) {
          finalPickedNumber = pick;
          winningOrder.push(i);
      }
    }
  }
}

findLastWinningBoard(pickNumbers.split(',').map(Number), boards);

// Calculate Score
let total = 0;
boards[winningOrder[winningOrder.length - 1]].forEach(line => {
  line.forEach(number => 
    number !== "-1" && (total += Number(number))
  )
})

console.log(total * finalPickedNumber);