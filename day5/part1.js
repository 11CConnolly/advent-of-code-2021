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

let board = new Array(maxX + 1);
for (let i = 0; i < maxX + 1; i++) {
  board[i] = new Array(maxY + 1).fill(".");
}

console.log(board);

input.map(x => {
  const line = x.calculateLine();
  if (line !== undefined) {
    for (p of line) {
      console.log(typeof(p));
      console.log(p);
      console.log("===");
      if (board[p.x][p.y] === ".") {
        board[p.x][p.y] = 1;
      } else {
        board[p.x][p.y]++;
      }
    }
  }
});

let crossovers = 0;
board.map(e => e.map(x => {x > 1 && (crossovers++)}));

console.log(crossovers);

//Lessons learned
//- Array.fill() will fill to a static value, even if this value is an object declared as new.
//It will feed in that same value
//- When dealing with JS classes, need to use 'this' keyword to refer to properties
//- Class syntax, use get XYZ for properties, and straight function syntax for methods
//- Classes need a constructor to initalise values
//- Be extremely careful in plain JS without TypeScript dealing with datatypes. Downside of weakly typed languages