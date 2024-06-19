const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const scores2 = scores.map(elem => elem < 10 ? elem * 10 : elem);

console.log(scores2);

const scores3 = scores2.filter(elem => elem <= 100);
console.log(scores3);

const scores4 = scores3.filter(elem => elem > 0);
console.log(scores4);

const sum = scores4.reduce((acc, elem) => acc + elem, 0);
console.log(sum);

const count = scores4.reduce(acc => acc + 1, 0);
console.log(count);