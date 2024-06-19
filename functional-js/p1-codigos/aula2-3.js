const R = require('ramda');

const add = R.curry((num1, num2) => num1 + num2);
const multiply = R.curry((num1, num2) => num1 * num2);

// --------------------------------------------
const arr = [4, 5, -10, 6];
// console.log(arr);

// // (1) create add 10, double. Then compose it (R.pipe)
// // ----------
// const addTen = add(10);
// const double = multiply(2);
// const addTenAndDouble = R.pipe(addTen, double);

// console.log( addTenAndDouble(0) );

// // apply to array
// console.log( arr.map(addTenAndDouble) );

// // make it more direct
// console.log( arr.map(R.pipe(add(10), multiply(2))) );

// --------------------------------------------
const createPerson = R.curry((name, genre, age) => ({ name, genre, age }));

const changeAgeByYearOfBirth = person => {
    const p = R.clone(person);
    p.yearOfBirth = 2021 - p.age;
    delete p.age;
    return p;
}

const nameUpperCase = person => {
    const p = R.clone(person);
    p.name = p.name.toUpperCase();
    return p;
}

const fullGenre = person => {
    const p = R.clone(person);
    p.genre = p.genre === 'M' ? 'Male' : 'Female';
    return p;
}

// (2) create a person with year of birth, name uppercase, full genre
// ----------

const transformPerson = R.pipe(
    createPerson,
    changeAgeByYearOfBirth,
    nameUpperCase,
    fullGenre
);

console.log( createPerson('Joana da Silva', 'F', 25) );

console.log( transformPerson('Joana da Silva', 'F', 25) );



// const createDbPerson = R.pipe(
//     createPerson,
//     changeAgeByYearOfBirth,
//     nameUpperCase,
//     fullGenre
// );