const fs = require('fs');

// const filePath = './resources/annual-enterprise-survey-2021-financial-year-provisional-csv.csv';
// const filePath = './resources/overseas-trade-indexes-March-2024-quarter-provisional.csv';
const filePath = '/home/andre/temp/Data8277.csv';

const content = fs.readFileSync(filePath, 'utf-8');
lines = content.split("\n");
// print the first 5 lines
for (let i = 1; i <= 5; i++) {
    lines[i].split(",");
    // console.log(lines[i]);
}
    