const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

let elfCalories = 0;
let allElfCalories = [];
arr.forEach((calories) => {
  if (calories) {
    elfCalories = elfCalories + parseInt(calories)
  } else {
    allElfCalories.push(elfCalories);
    elfCalories = 0;
  }
});

allElfCalories.sort((a, b) => a - b);
allElfCalories.reverse();

allElfCalories = allElfCalories.slice(0, 3);
const sum = allElfCalories.reduce((partialSum, a) => partialSum + a, 0);

console.log('Sum', sum);