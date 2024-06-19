// inteiro
// let var1 = 10;
// console.log(var1);

// function foo(a, b) {
//     let ret = 20;
//     return ret;
// }

// let b = foo(var1, 5);
// console.log(b);

// funcao
function bar() {
    console.log('print bar');
}

bar();

let bar2 = bar;
bar2();

function callFunction(functionName, fun) {
    console.log('I will call ' + functionName);
    fun();
}

callFunction('bar', bar);

function createHello(helloMessage) {
    return function (nome) {
        console.log(`${helloMessage}, ${nome}!`);
    }
}

const olaPtBr = createHello('Ola');
const hello = createHello('Hello');

olaPtBr('Joao');
olaPtBr('Maria');
hello('Joao');
hello('Maria');

const objeto = {};
objeto.h1 = olaPtBr;
objeto.h2 = hello;

objeto.h1('Antonio');
objeto.h2('Antonio');