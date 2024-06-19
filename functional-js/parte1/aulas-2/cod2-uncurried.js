const R = require('ramda');

const add = R.curry((num1, num2) => num1 + num2);

const multiply = R.curry((num1, num2) => num1 * num2);

const createPerson = R.curry((name, genre, age) => {
    return {
        name, genre, age
    };
});

// -------------------------------------------- //
// (1) curry functions
// const addTen = add(10);
// console.log( addTen(5) );
// console.log( addTen(12) );


// -------------------------------------------- //
// (2) using curried functions

// partial call for the 3 functions


const arr = [4, 5, -10, 6];
// addTen and apply to arr
const addTen = add(10);
// console.log(arr);
// console.log( arr.map(addTen) );

// add 10 and then double
const double = multiply(2);

// console.log( arr.map(addTen).map(double) );
// -------------------------------------------- //
// (3) using curried functions with R.__

// Male
const createMale = createPerson(R.__, 'M', R.__);

console.log( createMale('Chuck', 45) );
console.log( createMale('Norris', 54) );

// 25 years old


// Female and 30 years