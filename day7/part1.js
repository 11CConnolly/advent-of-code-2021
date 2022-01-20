const { input } = require('./input');

// Sort the data
const mergeSort = (list) => {
  // base case
  if (list.length <= 1) {
    return list
  }
  
  // recursive case
  // divide into two equal sized sublists
  let left = [];
  let right = [];
  
  for (let i = 0; i < list.length; i++) {
    if (i < (list.length / 2)) {
        left.push(list[i])
    } else {
      right.push(list[i])
    }
  }
  
  // recsively sort both lists, may have to .slice()?
  left = mergeSort(left);
  right = mergeSort(right);
  
  return merge(left, right);
}

// Merge the left and right sublists
const merge = (left, right) => {
  let result = [];
  
  // While we still have elements in both lists
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  
  // Either left or right may have elements left, consume them
  // Can probably map this but I'm too tired
  while (left.length !== 0) {
    result.push(left.shift())
  }
  while (right.length !== 0) {
    result.push(right.shift())
  }
  
  return result;
}

const sortedList = mergeSort(input);

// Find the median
// if even number, find the two around the middle, average them
// if off number, find the middle
let median = 0;

if (sortedList.length % 2 === 0) {
  const middle = sortedList.length / 2;
  median = (sortedList[middle - 1] + sortedList[middle]) / 2;
} else {
  median = sortedList[Math.floor(sortedList.length / 2)];
}

console.log(median);
