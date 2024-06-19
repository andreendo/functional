const { clone } = require('ramda');

const users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// Modifies data
const storeUser = (arr, user) => {
    return arr.map(elem => {
        if (elem.name.toLowerCase() === user.name.toLowerCase()) {
            return user;
        } else {
            return elem;
        }
    });

    // for (let i = 0; i <= arr.length; i++) {
    //     if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
    //         arr[i] = user;
    //         break;
    //     }
    // }
}

// Pure functions
const getUser = (arr, name) => {
    return arr.find(user => user.name.toLowerCase() === name.toLowerCase());
}

const updateScore = (user, newAmount) => {
    if (user) {
        const res = clone(user);
        res.score += newAmount;
        return res;
    }
};

const updateTries = function (user) {
    if (user) {
        const res = clone(user);
        res.tries++;
        return res;
    }
};

console.log('----------------');
console.log('before changes');
console.log(users);
console.log('----------------');

let usr = getUser(users, "Henry");
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
const newArray = storeUser(users, usr2);

console.log('after changes');
console.log(newArray);