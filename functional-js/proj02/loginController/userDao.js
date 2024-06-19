// Define the User class
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// Define the UserDAO class
class UserDAO {
    constructor() {
        // Simulate a DB with 10 users
        this.users = Array.from({ length: 10 }, (_, i) => new User(`user${i + 1}`, `pass${i + 1}`));
    }

    getUsers() {
        return this.users;
    }
}

module.exports = { UserDAO }

// // Example usage
// const userDao = new UserDAO();
// const users = userDao.getUsers();
// console.log(users);
