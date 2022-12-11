const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const puzzles = contents.split(/\r?\n/);

let partiallyContainedAssignmentPairCount = 0;
puzzles.forEach((puzzle) => {
  const [elfOneAssignment, elfTwoAssignment] = puzzle.split(',');
  const [elfOneStart, elfOneEnd] = elfOneAssignment.split('-');
  const [elfTwoStart, elfTwoEnd] = elfTwoAssignment.split('-');

  if ((parseInt(elfOneStart) >= parseInt(elfTwoStart) && parseInt(elfOneStart) <= parseInt(elfTwoEnd) || parseInt(elfOneEnd) >= parseInt(elfTwoStart) && parseInt(elfOneEnd) <= parseInt(elfTwoEnd)) ||
      (parseInt(elfTwoStart) >= parseInt(elfOneStart) && parseInt(elfTwoStart) <= parseInt(elfOneEnd) || parseInt(elfTwoEnd) >= parseInt(elfOneStart) && parseInt(elfTwoEnd) <= parseInt(elfOneEnd))){
    partiallyContainedAssignmentPairCount++;
  }
});

console.log('partiallyContainedAssignmentPairCount', partiallyContainedAssignmentPairCount)