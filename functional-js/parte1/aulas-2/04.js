const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
}

// console.log(foo); // foo é um função generator

const gen = foo(); // chamar a função foo retorna um objeto generator/iterator
console.log(gen);

// percorrer os elementos de um generator
for (let it of gen) {
    console.log(it);
}

console.log(gen.next());