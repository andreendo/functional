function createHelloMessage(helloMsg) {
    return function (name) {
        console.log(`${helloMsg}, ${name}!`);
    }
}

const ola = createHelloMessage('Ola');
const konitiwa = createHelloMessage('Konitiwa');

ola('Caue');
ola('Caroline');

konitiwa('Computador');
konitiwa('mestre Miagi');

console.log(konitiwa.toString());