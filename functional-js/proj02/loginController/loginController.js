const { UserDAO } = require('./userDao');

const userDao = new UserDAO();

function performLogin(request) {
    return validateName(request)
        .then(validatePassword)
        .then(findUser)
        .then(user => checkPassword(user, request.password));
}

function findUser({ name }) {
    console.log('>>findUser');
    const user = userDao.getUsers().find(u => u.username == name);
    return (user != undefined) ? Promise.resolve(user) : Promise.reject("User does not exist");
}

function checkPassword(user, password) {
    console.log('>>checkPassword');

    if (user.password !== password)
        return Promise.reject("Incorrect password");

    return Promise.resolve(`${user.username} logged`)
}

function validateName(request) {
    console.log('>>validateName');

    const name = request.name;
    if (name == undefined || name == '')
        return Promise.reject("Invalid name");

    return Promise.resolve(request);
}

function validatePassword(request) {
    console.log('>>validatePassword');
    const password = request.password;
    if (password == undefined || password == '')
        return Promise.reject("Invalid password");

    return Promise.resolve(request);
}

performLogin({ name: "user4", password: "pass4" })
    .then(res => console.log(`Success: ${res}`))
    .catch(err => console.log(`Error: ${err}`));