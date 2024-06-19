/* 
Escreva um programa que receba o horário de entrada (dois inteiros representando as horas e os minutos) e o horário de saída (dois inteiros no mesmo formato) e calcule o pagamento do consultor. 

É pago para o consultor o valor de R$ 0,40 por minuto se ele trabalhou até 120 minutos; caso ele/a tenha trabalhado mais de 120 minutos, o valor por minuto é de R$ 0,35. Imprima quantos minutos o consultor trabalhou, o valor por minuto considerado e seu pagamento.

CT1: <Entrada: 10:20, Saída: 10:30; 10 minutos, valor minuto: 0.40, pagamento: R$ 4.00>
CT2: <Entrada: 8:35, Saída: 17:30; 535 minutos, valor minuto: 0.35, pagamento: R$ 187.25> 
*/

const readline = require('readline');
const R = require('ramda');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Horario de entrada (hh:mm): `, unEntrada => {
    rl.question(`Horario de saida (hh:mm): `, unSaida => {
        rl.close();
        console.log({ unEntrada, unSaida });
        // TODO
    });
});
