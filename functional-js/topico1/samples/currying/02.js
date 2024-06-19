const { curry, pipe } = require('ramda');

const ffun = (a, b, c) => {
    return a + b + c;
}

const gfun = (d, e) => {
    return d + e;
}

const hfun = (f, g, h) => {
    return f + g + h;
}

/*
const curriedF = curry(ffun);
const curriedG = curry(gfun);
const curriedH = curry(hfun);

const newFunc = pipe(
    curriedF(a)(b),
    curriedG(d),
    curriedH(f)(g)
);
*/

const newFunc = pipe(
    curry(ffun)(1)(2),
    curry(gfun)(4),
    curry(hfun)(5)(6)
);

console.log(newFunc(3));


const doubleNum = num => num + num;
const totalIt = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;
const doArray = (num1, num2) => [num1, num2];

const newFunction = pipe(
    doubleNum,
    curry(totalIt)(3)(2)(1),
    curry(doArray)(50)
); 

console.log(newFunction(5));

