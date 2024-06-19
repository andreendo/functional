const R = require("ramda");
const S = require("sanctuary");

function div(a, b) {
    if (b == 0)
        return S.Nothing;

    return S.Just(a / b);
}

// const c = div(1, 3);
// const c2 = div(1, 0);

// console.log(S.maybe("Error")(String)(c))

// console.log( S.maybe(0)(R.identity)(c) )

// console.log( S.maybe(0)(R.identity)(c2) )

function safeDiv(a, b) {
    if (b == 0)
        return S.Left("cannot divide by zero.");

    return S.Right(a/b);
}

const c = safeDiv(1, 3);
const c2 = safeDiv(1, 0);

console.log( c );

// Function S.either (arg1)(arg2)(arg3)
// arg1 - function to handle left
// arg2 - function to handle right
// arg3 - Either object


console.log( S.either(R.identity)(R.identity)(c) );

console.log( S.either(R.identity)(R.identity)(c2) );