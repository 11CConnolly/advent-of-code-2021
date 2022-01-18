const { input } = require('./input');

// [3, 4, 3, 1, 2]

let count = 0;
const fishPools = [[3, 4, 3, 1, 2]]

while (count < 256) {
  for (let i=0; i<fishPools.length; i++) {
    for (let f=0;f<fishPools[i].length;f++) {
      if (fishPools[i][f] === 0) {
        fishPools[i][f] = 7;
        // Maybe push an 8?
        if (fishPools[i+1] === undefined) {
          fishPools[i+1] = []
        }
        fishPools[i+1].push(9)
      }
      fishPools[i][f]--;
    }
  }
  
  count++;
}
let fishes = 0;
fishPools.map(pool => fishes += pool.length);
console.log(fishes);