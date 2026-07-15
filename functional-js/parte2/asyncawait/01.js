async function somaAsync(num1, num2) {
    return num1 + num2;
}


console.log( somaAsync(1, 2) ); //imprime objeto promise

somaAsync(1, 2)
    .then(res => {
        console.log(res);
    });


// const p1 = somaAsync(10, 20);
// p1.then(res => {
//     console.log(res);
// });

// console.log('end');



