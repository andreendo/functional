const users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

// Modifies data
const storeUser = (arr, user) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
            arr[i] = user;
            break;
        }
    }
}

// Pure functions
const getUser = (arr, name) => {
    /*for (let i = 0; i <= arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase())
            return arr[i];
    }

    return null;*/
    return arr.find(user => user.name.toLowerCase() === name.toLowerCase());
}

const updateScore = (user, newAmount) => {
    if (user) {
        user.score += newAmount;
        return user;
    }
};

const updateTries = function (user) {
    if (user) {
        user.tries++;
        return user;
    }
};

console.log(users);

let usr = getUser(users, "Henry");
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
storeUser(users, usr2);

console.log(users);