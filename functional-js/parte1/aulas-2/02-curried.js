const R = require('ramda');
// -------------------------------------------- //
// (1) curry functions
const add = R.curry((num1, num2) => num1 + num2);

const multiply = R.curry((num1, num2) => num1 * num2);

const createPerson = R.curry((name, genre, age) => ({ name, genre, age }));

// -------------------------------------------- //
// (2) using curried functions

// partial call for the functions add and createPerson
console.log(add(5)(10));

const a = createPerson('Joao da Silva');
const b = a('M', 45);
console.log(b);

console.log(createPerson('Maria', 'F', 18));
console.log(createPerson('Maria')('F')(18));

const arr = [4, 5, -10, 6];
// addTen and apply to arr
const addTen = add(10);
// console.log( arr.map(addTen) );

// add 10 and then double
const double = multiply(2);
console.log(arr);
console.log(arr.map(addTen).map(double));

// -------------------------------------------- //
// (3) using curried functions with R.__

// Male
const createMale = createPerson(R.__, 'M', R.__);
console.log(createMale('Carlos', 34));
console.log(createMale('Andre', 36));

// 25 years old
const create25Person = createPerson(R.__, R.__, 25);
console.log(create25Person('Carlos Joao', 'M'));
console.log(create25Person('Maria J', 'F'));

// Female and 30 years
const createFemale30Years = createPerson(R.__, 'F', 30);
console.log(createFemale30Years('Maria'));
console.log(createFemale30Years('Flavia'));
