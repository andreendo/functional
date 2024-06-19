const Lazy = require('lazy.js');


const errorLogEntries = Lazy.readFile('./resources/server.log')
    .lines()
    .filter(line => line.includes('ERROR'))
    .take(5)
    .each(l => console.log(l));

console.log(errorLogEntries);