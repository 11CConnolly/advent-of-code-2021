const fs = require('fs');

const input = fs
	.readFileSync('input.txt', 'utf8')
	.toString()
	.split("\n")

module.exports = {
	input,
};