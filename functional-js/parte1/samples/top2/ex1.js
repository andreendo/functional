// higher order functions
// 

const arr = [1, 2, 3, 4, 5];

const total = arr.reduce((acc, elem) => {
    return acc + elem;
}, 0);

console.log(total);

const newArray = arr.map((elem, index, arr) => {
    return elem ** 2;
});

console.log(newArray);

// predicate function
const fArr = arr.filter((elem) => {
    return elem < 3;
});

console.log(fArr);