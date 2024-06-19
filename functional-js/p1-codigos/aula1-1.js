function print() {
    console.log('print');
}

function callTwice(func) {
    func();
    func();
}

function returnPrint() {
    return function() {
        console.log('other print');
    };
}

// print();

// let f = print;
// f();

// callTwice(print);

// let f = returnPrint();
// f();

// returnPrint()();

function createHelloFunction(message) {
    return function (name) {
        console.log(`${message}, ${name}!`);
    }
}

const obj = {};

obj.hello = createHelloFunction('Hello');
obj.hello('João');
obj.hello('Maria');

obj.ola = createHelloFunction('Olá');
obj.ola('João');
obj.ola('Maria');

console.log(typeof obj.ola === 'function');

console.log(obj.ola.toString());
console.log(obj.ola.name);