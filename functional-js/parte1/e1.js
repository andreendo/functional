const originalArray = [1, 2, 3, 4, 5];
const filteredArray = originalArray.filter(num => num % 2 === 0); // filter even numbers

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(filteredArray);  // [2, 4]

filteredArray[0] = 10; // modify the first element in filteredArray

console.log(originalArray); // [1, 10, 3, 4, 5] (original is also modified)
console.log(filteredArray);  // [10, 4]