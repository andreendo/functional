const { clone, pipe } = require('ramda');

const createUser = id => ({ userId: id, questions: [] });

const addQuestion = (qID, response, result, weight, user) => {
    const questions = clone(user.questions);
    return {
        userId: user.userId,
        questions: [...questions, { qID, response, result, weight }]
    };
}

const calcScore = user => user.questions.reduce((total, q) => total + (q.result ? q.weight : 0), 0);

const calcPossible = user => user.questions.reduce((total, q) => total + q.weight, 0);

const formatResult = user => `${calcScore(user)} out of ${calcPossible(user)}`;

const print = str => console.log(str);

const displayResults = pipe(
    formatResult,
    print
);

const updateScore = (qID, response, result, weight, user) => {
    const usr = addQuestion(qID, response, result, weight, user);
    displayResults(usr);
    return usr;
};

const user1 = createUser(1);
const user2 = updateScore("q1", "answer", true, 1, user1);
const user3 = updateScore("q2", "wrong answer", false, 2, user2);
