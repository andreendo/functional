// Tradicional rotulada
function foo(a, b) {
    return a + b;
}

// Tradicional anonima
const foo2 = function (a, b) {
    return a + b;
}

// arrow - function expression
const sum = (a, b) => a + b;

const createClient = (id, name) => ({ id, name });
console.log(createClient(4556, 'Jean Claude'));



// arrow - function statements
const sum2 = (a, b) => {
    // 
    return a + b;
};

// IIFE

(function (a, b) {
    console.log(a + b);
})(4, 5);

(function (name) {
    // 
    console.log('Nome:', name);
})('Andre');

(function () {
    var g1 = 10;
    console.log(`Aqui: ${g1}!!`);
})();

// g1 é definida e usada somente no escopo da função. 
// Descartada ao concluir a execução
// console.log(g1); // erro