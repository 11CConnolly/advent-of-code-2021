const fs = require("fs");

const lines = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/)
        
input = lines.map(x => x.split("|").map(s => s.trim()));

module.exports = {
  input
}