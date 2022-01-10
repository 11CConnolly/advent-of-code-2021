const fs = require("fs");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
  
  get isStraightLine() {
    return (this.first.x === this.second.x || 
             this.first.y === this.second.y)
  }
  
  calculateLine() {
    if (!this.isStraightLine)
      return undefined;
    
    let line = [];
    line.push(this.first);
    
    let smaller = 0;
    let x_difference = Math.abs(this.first.x - this.second.x);
    let y_difference = Math.abs(this.first.y - this.second.y);
    
    // Still Ugly
    if (x_difference > 1) {
      this.first.x < this.second.x 
        ? smaller = this.first.x 
        : smaller = this.second.x
      for (let i = 1; i < x_difference; i++) {
        line.push(new Point(smaller + i, this.first.y))
      }
    } else if (y_difference > 1) {
      this.first.y < this.second.y 
        ? smaller = this.first.y 
        : smaller = this.second.y
      for (let i = 1; i < y_difference; i++) {
        line.push(new Point(this.first.x, smaller + i))
      }
    }
    
    line.push(this.second);
    
    return line;
  }
}

let makeNewPair = (coords) => {
  const p1 = coords[0].split(",");
  const p2 = coords[1].split(",");
  const pointOne = new Point(+p1[0], +p1[1]);
  const pointTwo = new Point(+p2[0], +p2[1]);
  
  return new Pair(pointOne, pointTwo);
}

const input = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/)
        .map(x => x.split("->").map(s => s.trim()))
        .map(makeNewPair)

module.exports = {
  input,
  Point,
  Pair
}