const R = require('ramda');

const add = R.curry((num1, num2) => num1 + num2);
const multiply = R.curry((num1, num2) => num1 * num2);
const createPerson = R.curry((name, genre, age) => ({ name, genre, age }));

// --------------------------------------------
const arr = [4, 5, -10, 6];

// (1) add 10 and then double
// ----------

// --------------------------------------------
const changeAgeByYearOfBirth = person => {
    const p = R.clone(person);
    p.yearOfBirth = 2024 - p.age;
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