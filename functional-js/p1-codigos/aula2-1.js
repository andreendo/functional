const R = require('ramda');

// exemplos de funcoes com side-effects

// ---------------------------------------------------- //
function foo1(a) {
    const newA = R.clone(a);
    newA.foo1 = 10;
    return newA;
}

// const aObj = {};
// console.log(aObj);
// const newObj = foo1(aObj);
// console.log(aObj);
// console.log(newObj);

// ---------------------------------------------------- //
const someObj = { counter: 0 };

function foo3(obj) {
    const newObj = R.clone(obj);
    newObj.counter++;
    return newObj;
}

// const newObj = foo3(someObj);
// console.log(someObj);
// console.log(newObj);
// foo3();
// console.log(someObj);

// ---------------------------------------------------- //

function inc(obj) {
    const nObj = R.clone(obj);
    if (typeof nObj.inc === 'undefined') {
        nObj.inc = 1;
        return nObj;
    }

    nObj.inc++;
    return nObj;
}

const var1 = {};
const a1 = inc(var1);
console.log(var1);
console.log(a1);

const a2 = inc(a1);
console.log(var1);
console.log(a1);
console.log(a2);
