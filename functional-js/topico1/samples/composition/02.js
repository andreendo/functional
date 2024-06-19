const { pipe } = require('ramda');

/*
// Original code
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = scores.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = boostSingleScores.filter(val => val <= 100);

const rmvZeroScores = rmvOverScores.filter(val => val > 0);

const scoresSum = rmvZeroScores.reduce((sum, val) => sum + val, 0);

const scoresCnt = rmvZeroScores.reduce((cnt, val) => cnt + 1, 0);

//Convert each statement to a function that can accept and act on any array.

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.

//Compose a function that will do all the modifications to an array. Test it using the scores array.

//Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.

//Compose a function that will do all the modifications on an array and return an average.  
*/

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = arr => arr.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = arr => arr.filter(val => val <= 100);

const rmvZeroScores = arr => arr.filter(val => val > 0);

const scoresSum = arr => arr.reduce((sum, val) => sum + val, 0);

const scoresCnt = arr => arr.reduce((cnt, val) => cnt + 1, 0);

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const remZeroLowerOverScores = pipe(
    rmvZeroScores,
    rmvOverScores
);
console.log(remZeroLowerOverScores(scores));

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const allChanges = pipe(
    boostSingleScores,
    rmvOverScores,
    rmvZeroScores,
    scoresSum
);
console.log(allChanges(scores));

//Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.
const average = arr => scoresSum(arr) / scoresCnt(arr);
console.log(average(scores));

//Compose a function that will do all the modifications on an array and return an average.  
const allChangesAvg = pipe(
    boostSingleScores,
    rmvOverScores,
    rmvZeroScores,
    average
);
console.log(allChangesAvg(scores));