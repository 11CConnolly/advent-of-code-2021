const fs = require("fs");

const lines = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/)
        .toString();
        
const input = lines.split(",").map(Number);

module.exports = {
  input,
}