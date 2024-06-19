setImmediate(() => {
    console.log('setImmediate 1');
});

setImmediate(() => {
    console.log('setImmediate 2');
});

process.nextTick(() => {
    console.log('nextTick 1');
});

process.nextTick(() => {
    console.log('nextTick 2');
});

setTimeout(() => {
    console.log('timeout1 2000');
}, 2000);

setTimeout(() => {
    console.log('timeout2 1000');
}, 1000);

setTimeout(() => {
    console.log('timeout3 1000');
}, 1000);

let counter = 0;
const intervalID = setInterval(() => {
    console.log('interval', ++counter);
}, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log('timeout to end interval');
}, 12000);

console.log('end 1');