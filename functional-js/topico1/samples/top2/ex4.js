const arr = ['Building', 'car', 'bicycle', 'automobile', 'Tree', 'house'];

arr.sort();
console.log(arr);

arr.sort((a, b) => {
    const x = a.toLowerCase();
    const y = b.toLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
});

console.log(arr);