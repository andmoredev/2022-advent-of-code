const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

let elfCalories = 0;
const allElfCalories = [];
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
console.log('Higher', allElfCalories[0]);