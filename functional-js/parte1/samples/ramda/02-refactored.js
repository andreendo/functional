const R = require('ramda');

const users = [
    { name: 'James', score: 30, tries: 1 },
    { name: 'Mary', score: 110, tries: 4 },
    { name: 'Henry', score: 80, tries: 3 }
];

const equalsIgnoreCase = (str1, str2) => R.eqBy(R.toLower, str1, str2);

const storeUser = (arr, user) => R.map(val => equalsIgnoreCase(val.name, user.name) ? user : val, arr);

// original
// const getUser = (arr, name) => R.reduce((obj, val) => equalsIgnoreCase(val.name, name) ? R.clone(val) : obj, null, arr);
const getUser = (arr, name) => R.clone(R.find(val => equalsIgnoreCase(val.name, name))(arr));

const updateScore = (user, newAmt) => R.assoc('score', user.score + newAmt, user);

const updateTries = user => R.assoc('tries', user.tries + 1, user);

const getUsersUser = R.curry(getUser)(users);

const getHenry = () => getUsersUser('Henry');

const updateHenry = R.pipe(
    R.curry(updateScore)(getHenry()),
    updateTries,
    R.curry(storeUser)(users)
);

console.log(updateHenry(100));
console.log(users);