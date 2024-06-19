// exemplos de funcoes com side-effects

function foo1(a) {
    a.foo1 = 10;
    console.log(a);
}

const aObj = {};
console.log(aObj);
foo1(aObj);
console.log(aObj);

const someObj = { counter: 0 };

function foo3() {
    someObj.counter++;
}

foo3();
console.log(someObj);
foo3();
console.log(someObj);
foo3();
console.log(someObj);


function inc(obj) {
    if (typeof obj.inc === 'undefined') {
        obj.inc = 0;
    }

    obj.inc++;
    return obj;
}

const var1 = {};
const var2 = inc(var1);
console.log(var1);
console.log(var2);
// const var3 = inc(var2);
// console.log(var1);
// console.log(var2);
// console.log(var3);