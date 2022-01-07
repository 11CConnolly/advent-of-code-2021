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
    
    if (checkRowOrColumnIsComplete(rowLine))
      return true;
  }
  
  for (let i = 0; i < 5; i++) {
    let columnLine = [];
    for (let j = 0; j < 5; j++) {
      columnLine.push(board[j][i]);
    }
    
    if (checkRowOrColumnIsComplete(columnLine))
      return true;
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

const findLastWinningBoard = (numbers, boards) => {
  let winningBoard = [];
  let calledPick = 0;
  numbers.every(pick => {
    winningBoard = boards.find(board => markBoard(board, pick) && boardIsComplete(board));
    console.log(winningBoard);
    if (winningBoard !== undefined) {
      boards.splice(boards.indexOf(winningBoard), 1);
      if (boards.length === 0)
        return false;
    }
    
    return true;
  })
  
  return { winningBoard, calledPick }
}

const findLastWinningBoard = (numbers, boards) => {
  let winningBoard = []
  let calledNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    winningBoard = boards.find(board => markBoard(board, numbers[i]) && boardIsComplete(board));
    if (winningBoard !== undefined) {
      calledNumber = numbers[i]
      boards.splice(boards.indexOf(winningBoard), 1);
      
      if (boards.length === 0) return true;
    }
  }
  
  return { winningBoard, calledNumber }
}

const { winningBoard, calledPick } = findLastWinningBoard(pickNumbers.split(',').map(Number), boards);

// Calculate Score
let total = 0;
winningBoard.forEach(line => {
  line.forEach(number => 
    number !== "-1" && (total += Number(number))
  )
})
console.log(total * calledPick);