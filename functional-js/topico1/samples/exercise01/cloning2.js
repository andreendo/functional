const { clone } = require('ramda');

const arr = [3, 4, 2, 5, 1, 6];

const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));

const sortArray = (arr1) => {
    // return cloneObj(arr1).sort();
    return clone(arr1).sort();
}

const newArr = sortArray(arr);

console.log(arr);
console.log(newArr);
