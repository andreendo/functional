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