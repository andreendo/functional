const Lazy = require('lazy.js');


Lazy.readFile('./resources/server.log')
    .lines()
    .filter(line => line.includes('ERROR'))
    .take(5)
    .each(l => console.log(l));

