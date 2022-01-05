const { input } = require('./input');

const { pickNumbers, boards } = input;

const checkRowOrColumnIsComplete = (schlength) => {
  let complete = true;
  schlength.forEach(x => {
    if (x !== "-1")
      complete = false;
  });
  if (complete)
  return complete;
}

const boardIsComplete = (board) => {
  board.forEach(row => {
    if (checkRowOrColumnIsComplete(row)) {
      return true;
    }
  })
  
  for (let i = 0; i < board.length; i++) {
    let columnLine = [];
    for (let j = 0; j < board[0].length; j++) {
      columnLine.push(board[i][j]);
    }
    if (checkRowOrColumnIsComplete(columnLine)) {
      return true;
    }
  }
  
  return false;
}

const markBoard = (board, pick) => {
  let marked = false;
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (Number(board[i][j]) === pick) {
        board[i][j] = "-1";
        marked = true;
      }
    }
  }
  
  return marked;
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

console.log(firstBoard, firstPick);

let total = 0;

firstBoard.forEach(line => {
  line.forEach(number => 
    number !== "-1" && (total += Number(number))
  )
})

console.log(total * firstPick);
