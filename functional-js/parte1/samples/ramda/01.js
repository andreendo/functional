const R = require('ramda');

const addFive = R.add(5);
console.log(addFive(2));

const addOne = R.map(num => num + 1);
const multByThree = R.map(num => num * 3);
const removeNumsOver100 = R.filter(num => num <= 100);
const logAndReturn = (data) => {
    console.log(data);
    return data;
}
const sumAllNumbers = R.reduce((acc, val) => acc + val)(0);

const processNumbers = R.pipe(
    addOne,
    multByThree,
    removeNumsOver100,
    logAndReturn,
    sumAllNumbers,
    console.log    
);

processNumbers([5, 8, 20, 40]);