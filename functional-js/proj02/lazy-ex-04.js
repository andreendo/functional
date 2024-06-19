const Lazy = require('lazy.js');


const multiplesOfFive = Lazy.generate(index => (index + 1) * 5);

console.log( multiplesOfFive.take(5).toArray() );

const multiplesOfThree = Lazy.generate((() => {
    let init = 0;
    return () => {
        init = init + 3;
        return init;
    };
})());

console.log(multiplesOfThree.length());

console.log( multiplesOfThree.take(10).toArray() );


const multiplesOfSeven = Lazy(function*() {
   let v = 0;
   while(true) {
        v += 7;
        yield v;  
   } 
});

console.log( multiplesOfSeven.take(50).toArray() );