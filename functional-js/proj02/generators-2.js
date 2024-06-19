const R = require('ramda');

function* fibonacci() {
    let a0 = 1;
    let a1 = 1;
    yield a0;
    yield a1;
    while (true) {
        let an = a0 + a1;
        yield an;
        a0 = a1;
        a1 = an;
    }
}

const fib = fibonacci();

for (let i = 1; i<= 8; i++)
    console.log(fib.next().value)

const seq = R.range(0, 7).map(_ => fib.next().value);

console.log(seq);