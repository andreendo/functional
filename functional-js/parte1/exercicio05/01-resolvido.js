/* 
Escreva um programa que receba o horário de entrada (dois inteiros representando as horas e os minutos) e o horário de saída (dois inteiros no mesmo formato) e calcule o pagamento do consultor. 

É pago para o consultor o valor de R$ 0,40 por minuto se ele trabalhou até 120 minutos; caso ele/a tenha trabalhado mais de 120 minutos, o valor por minuto é de R$ 0,35. Imprima quantos minutos o consultor trabalhou, o valor por minuto considerado e seu pagamento.

CT1: <Entrada: 10:20, Saída: 10:30; 10 minutos, valor minuto: 0.40, pagamento: R$ 4.00>
CT2: <Entrada: 8:35, Saída: 17:30; 535 minutos, valor minuto: 0.35, pagamento: R$ 187.25> 
*/

const readline = require('readline');
const R = require('ramda');

const processarEntradas = input => {
    const ent = input.unEntrada.split(":");
    const saida = input.unSaida.split(":");
    return {
        "entrada": {
            "hora": parseInt(ent[0]),
            "min": parseInt(ent[1])
        },
        "saida": {
            "hora": parseInt(saida[0]),
            "min": parseInt(saida[1])
        }
    };
};

const calcularMinutosTrabalhados = ({ entrada, saida }) => {
    const minutosTrabalhados = (saida.hora*60 + saida.min) - (entrada.hora*60 + entrada.min);
    return { minutosTrabalhados };
} 

const addValorMinuto = R.curry(
    (dados, valor) => {
        cDados = R.clone(dados);
        cDados.valorMinuto = valor;
        return cDados;
    }
)

const add_0_40 = addValorMinuto(R.__, 0.40)
const add_0_35 = addValorMinuto(R.__, 0.35)

const trabalhouMenosQue120min = ({ minutosTrabalhados }) => minutosTrabalhados <= 120;

const definirValorDoMinuto = R.ifElse(
    trabalhouMenosQue120min,    // condição
    add_0_40,               // caso true
    add_0_35                // caso false
);

const calcularPagamento = dados => {
    dados.pagamento = dados.minutosTrabalhados * dados.valorMinuto;
    return dados;
};

const imprimir = res => {
    console.log(`${res.minutosTrabalhados} minutos, valor do minuto: ${res.valorMinuto.toFixed(2)}, pagamento: R$ ${res.pagamento.toFixed(2)}`);
};

const main = R.pipe(
    processarEntradas,
    calcularMinutosTrabalhados,
    definirValorDoMinuto,
    calcularPagamento,
    imprimir
);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Horario de entrada (hh:mm): `, unEntrada => {
    rl.question(`Horario de saida (hh:mm): `, unSaida => {
        rl.close();
        main({ unEntrada, unSaida });
    });
});
