function foo(nome) {
    console.log('foo', nome);
}

// let var1 = foo;
// foo('n1');

// var1('n2');

function callFunction(nomeDaFuncao, fun) {
    console.log('Vou chamar a funcao', nomeDaFuncao);
    fun('nome');
}

callFunction('foo', foo);

callFunction('myFun', function () {
    console.log('myFun');
});

const obj = {};
obj.f1 = foo;

obj.f1('de um objeto');