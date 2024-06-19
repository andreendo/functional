const fs = require('fs');
const Lazy = require('lazy.js');

const filePath = './resources/overseas-trade-indexes-March-2024-quarter-provisional.csv';

// content is a large string
const content = fs.readFileSync(filePath, 'utf-8');

//------------
// First 10 lines
lines = content.split("\n");
const firstTen = [];
for (let i = 1; i <= 10; i++) {
    firstTen.push(lines[i]);
    // console.log(lines[i]);
}
    
//------------
// First 10 lines - Lazily
const lazyFirstTen = Lazy(content).split("\n").take(10);
lazyFirstTen.each(l => {
    console.log(l)
})