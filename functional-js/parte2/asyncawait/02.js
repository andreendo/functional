const subtrairAsync = async (num1, num2) => num1 - num2;

console.log( subtrairAsync(4, 2) ); //imprime objeto promise

subtrairAsync(4, 2)
    .then(res => {
        console.log(res);
    });

    