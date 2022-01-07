const fs = require("fs");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const input = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/)
        .map(x => x.split("->").map(s => s.trim()))

module.exports = {
  input,
  Point
}