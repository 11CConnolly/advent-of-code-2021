const { input, Point, Pair } = require('./input');

// Find max size of board X and Y
// There's a better way to do this, probably
let maxX = 0;
let maxY = 0;

input.map(pair => {
  const x_ = pair.first.x;
  const y_ = pair.first.y;
  const _x = pair.second.x;
  const _y = pair.second.y;
  
  x_ > maxX && (maxX = x_)
  y_ > maxY && (maxY = y_)
  _x > maxX && (maxX = _x)
  _y > maxY && (maxY = _y)
})

const board = new Array(maxX).fill(new Array(maxY).fill("."));

input.map(x => {
  const line = x.calculateLine();
  line && line.map(p => {
      const currentPosition = board[p.x][p.y];
      board[p.x][p.y] = currentPosition === '.' 
        ? 1
        : board[p.x][p.y]++;
    })
});

console.log(board);