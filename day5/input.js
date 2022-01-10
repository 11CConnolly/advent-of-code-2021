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
}

let makeNewPair = (coords) => {
  const p1 = coords[0].split(",");
  const p2 = coords[1].split(",");
  const pointOne = new Point(p1[0], p1[1]);
  const pointTwo = new Point(p2[0], p2[1]);
  
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