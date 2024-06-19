const Lazy = require('lazy.js');

// const filePath = './resources/annual-enterprise-survey-2021-financial-year-provisional-csv.csv';
// const filePath = './resources/overseas-trade-indexes-March-2024-quarter-provisional.csv';
const filePath = '/home/andre/temp/Data8277.csv';

Lazy.readFile(filePath)
    .lines()
    .take(5)
    .each(l => {
        l.split(",");
        // console.log(l);
    });