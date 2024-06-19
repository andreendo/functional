let currentUser = 0;

let users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
];

const updateScore = function (newAmt) {
    users[currentUser].score += newAmt;
};

const returnUsers = function () {
    return users;
};

const updateTries = function () {
    users[currentUser].tries++;
};

const updateUser = function (newUser) {
    currentUser = newUser;
};

