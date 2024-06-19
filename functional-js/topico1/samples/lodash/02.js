// const boostSingleScores = scores.map(val => (val < 10) ? val * 10 : val);
// const rmvOverScores = boostSingleScores.filter(val => val <= 100);
// const rmvZeroScores = rmvOverScores.filter(val => val > 0);

const _ = require('lodash/fp');

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Convert each statement to a function that can accept and act on any array.
const multiplySingleScoresByTen = _.map(val => (val < 10) ? val * 10 : val);
const rmvScoresOver100 = _.filter(val => val <= 100)
const rmvZeroScores = _.filter(val => val > 0);

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const removeLowerAndOver100 = _.pipe(
    rmvZeroScores,
    rmvScoresOver100
);
console.log(removeLowerAndOver100(scores));

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const modifyAll = _.pipe(
    multiplySingleScoresByTen,
    removeLowerAndOver100
);
console.log(modifyAll(scores));

//Create a function that will accept an array and return the average.
const calculateAvg = _.mean;
console.log(calculateAvg(scores));

//Compose a function that will do all the modifications on an array and return an average.  
const meanOfAllModifications = _.pipe(
    modifyAll,
    _.mean
);
console.log(meanOfAllModifications(scores));