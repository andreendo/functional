const R = require('ramda');

// make them curried
const add = R.curry((num1, num2) => num1 + num2);

const multiply = R.curry((num1, num2) => num1 * num2);

// const createPerson = R.curry((name, genre, age) => {
//     return {
//         name, genre, age
//     };
// });

// -------------------------------------------- //
// (1) using curried functions: addTen
// const addTen = add(10);
// const reduceTwo = add(-2);

// console.log( addTen(3) );
// console.log( addTen(11) );

// console.log( reduceTwo(3) );
// console.log( reduceTwo(11) );

// // use it in an array.map
// const arr = [4, 5, -10, 6];
// console.log( arr.map(addTen) );
// console.log( arr.map(reduceTwo) );

// -------------------------------------------- //
// (2) using curried functions
// partial call for the 3 functions

const arr = [4, 5, -10, 6];

// double for multiply
const double = multiply(2);
const addTen = add(10);

//  add ten and then double
// console.log( arr.map(double).map(addTen) );
// console.log( arr.map(multiply(2)).map(add(10)) );

// -------------------------------------------- //
// (3) using curried functions with R.__

const createPerson = R.curry((name, genre, age) => {
    return {
        name, genre, age
    };
});

// create Male
const createMale = createPerson(R.__, 'M', R.__);

console.log( createMale('Chuck Norris', 67) );
console.log( createMale('Will Smith')(56) );

// 25 years old
const create25Person = createPerson(R.__, R.__, 25);
console.log( create25Person('Joao', 'M') );

// Female and 30 years
const createFemale30 = createPerson(R.__, 'F', 30);
console.log( createFemale30('Grace Hopper') );