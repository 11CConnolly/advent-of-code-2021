const fs = require("fs");

const input = fs
        .readFileSync("input.txt", "utf8")
        .toString()
        .split(/\r?\n/);

module.exports = {
  input,
}