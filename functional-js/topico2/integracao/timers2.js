// Timers

// setImmediate(() => {
//     console.log('setImmediate cb 1');    
// });

// setImmediate(() => {
//     console.log('setImmediate cb 2');    
// });

// process.nextTick(() => {
//     console.log('next tick 1');
// });

// process.nextTick(() => {
//     console.log('next tick 2');
// });

// setTimeout(() => {
//     console.log('1s depois');
// }, 1000);

// setTimeout(() => {
//     console.log('2s depois');
// }, 2000);
let c = 0;
const refInterval = setInterval(() => {
    console.log('interval', ++c);
}, 1000);

setTimeout(() => {
    clearInterval(refInterval);
    console.log('end interval');
}, 14000);

console.log('end of script');