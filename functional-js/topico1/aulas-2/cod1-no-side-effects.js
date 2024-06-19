const R = require('ramda');
const { some } = require('lodash');

// refactoring

function foo1(a) {
    const newA = R.clone(a);
    newA.foo1 = 10;
    return newA;
}

// const aObj = {};
// console.log(aObj);
// const nwAobj = foo1(aObj);
// console.log(aObj);
// console.log(nwAobj);

const someObj = { counter: 0 };

function foo3(obj) {
    const nObj = R.clone(obj);
    nObj.counter++;
    return nObj;
}

// const o1 = foo3(someObj);
// console.log(someObj);
// console.log(o1);
// const o2 = foo3(o1);
// console.log(someObj);
// console.log(o2);
// const o3 = foo3(o2);
// console.log(someObj);
// console.log(o3);

function inc(obj) {
    const cObj = R.clone(obj);
    if (typeof cObj.inc === 'undefined') {
        cObj.inc = 1;
        return cObj;
    }

    cObj.inc++;
    return cObj;
}

const var1 = {};
// const var2 = inc(var1);
// console.log(var2);
// const var3 = inc(var2);
// const var4 = inc(var3);
// console.log(var4);