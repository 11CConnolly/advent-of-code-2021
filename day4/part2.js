const { input } = require('./input');

const { pickNumbers, boards } = input;

const checkRowOrColumnIsComplete = (schlength) => {
  return schlength.filter(x => x === "-1").length === 5;
}

const boardIsComplete = (board) => {
  for (let i = 0; i < 5; i++) {
    let rowLine = [];
    let columnLine = [];
    for (let j = 0; j < 5; j++) {
      rowLine.push(board[i][j]);
      columnLine.push(board[j][i]);
    }
    
    if (checkRowOrColumnIsComplete(rowLine) || checkRowOrColumnIsComplete(columnLine))
      return true;
  }
  
  return false;
}

const markBoard = (board, pick) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (Number(board[i][j]) === pick) {
        board[i][j] = "-1";
        return true;
      }
    }
  }
  
  return false;
}

const findFirstWinningBoard = (numbers, boards) => {
  let firstBoard = [];
  let firstPick = 0;
  numbers.every(pick => {
    firstBoard = boards.find(board => markBoard(board, pick) && boardIsComplete(board));
    if (firstBoard !== undefined) {
      firstPick = pick;
      return false;
    }
    
    return true;
  })
  
  return { firstBoard, firstPick }
}

const { firstBoard, firstPick } = findFirstWinningBoard(pickNumbers.split(',').map(Number), boards);

// Calculate Score
let total = 0;
firstBoard.forEach(line => {
  line.forEach(number => 
    number !== "-1" && (total += Number(number))
  )
})
console.log(total * firstPick);