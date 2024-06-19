function foo1() {

}

const foo2 = function () {

}

// arrow functions
const sum = (a, b) => a + b;
const createClient = (id, name) => ({ id, name });
console.log(sum(5, 6));

console.log(createClient(4556, 'Jean Claude'));

const diff = (a, b) => {
    console.log('some diff');
    return a - b;
};

console.log(diff(5, 6));

// describe('meu teste', () => {

// });
(() => {
    console.log('My IIFE');
    console.log('My IIFE, yes!');
})();