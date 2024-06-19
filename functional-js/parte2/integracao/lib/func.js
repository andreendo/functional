function asyncSum(arr) {
    return new Promise((resolve, reject) => {
        const sum = arr.reduce((acc, el) => acc + el, 0);
        setImmediate(() => {
            resolve(sum);
        });
    });
}

function firstNegative(arr) {
    return new Promise((resolve, reject) => {
        const first = arr.find(el => el < 0);
        process.nextTick(() => {
            resolve(first);
        });
    });
}

function waitFor(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

module.exports = {
    asyncSum,
    firstNegative,
    waitFor
}