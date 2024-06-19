// função que soma n números em um array e retorna promise que resolve na próxima iteração do event loop

function somaAsync(arr) {
    const res = arr.reduce((acc, el) => acc + el, 0);
    const p = new Promise((resolve, reject) => {
        setImmediate(() => {
            resolve(res);
        });
    });
    return p;
}

// - função que acha o primeiro numero negativo em um array e retorna promise com resultado que resolve na próxima iteração do event loop

function primeiroNegativo(arr) {
    const res = arr.find(el => el < 0);
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve(res);
        });
    });
}

// função que retorna uma promise que resolve em X ms
function esperarPor(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

module.exports = {
    somaAsync, primeiroNegativo, esperarPor
}

// somaAsync([2, 2, 2])
//     .then((res) => {
//         console.log(res);
//     });

// console.log('end of script');