function bar() {
    console.log('print bar');
}

console.log(typeof 1);
console.log(typeof 'string');
console.log(typeof bar);

console.log(bar.toString());

console.log(bar.length);

(function (a, b) {
    console.log(a + b);
})(4, 5);