const funcionarios = [
    {
        id: 11,
        nome: 'joao da silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'joana da silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'joana da Mata',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'joana da Mata',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'joana da Mata',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'joana da Mata',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
];

// Use o filter() para recuperar um array apenas com objetos da categoria 'gerente'
const gerentes = funcionarios.filter(f => f.categoria === 'gerente');
console.log(gerentes);

// Use o reduce() para retornar o objeto com o menor id
const menorID = funcionarios.reduce((acc, f) => {
    if (f.id < acc.id)
        return f;
    else
        return acc;
},
    { id: Number.POSITIVE_INFINITY }
);
console.log(menorID)

// Use o map() para colocar todos os nomes no formato UpperCase.
const nFunctionarios = funcionarios.map(f => {
    f.nome = f.nome.toUpperCase();
    return f;
});

console.log(nFunctionarios);


