const _ = require('lodash/fp');

const res = _.add(2, 5);
console.log(res);

// auto-curry
const addFive = _.add(5);
console.log(addFive(2));

const addOne = _.map(num => num +1);
const multByThree = _.map(num => num * 3);
const removeOver100 = _.filter(num => num <= 100);
const logAndReturn = data => {
    console.log(data);
    return data;
}

const sumAllNumber = _.reduce((acc, num) => acc + num)(0);

const processNumbers = _.pipe(
    addOne,
    multByThree,
    removeOver100,
    logAndReturn,
    sumAllNumber,
    console.log
);

processNumbers([5, 8, 20, 40]);