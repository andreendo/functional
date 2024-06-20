const fs = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    console.log('some request');
    try {
        const data = await fs.readFile('../html/basic.html', 'utf-8');    
        res.send(data);
    } catch(err) {
        res.send(err);
    } 
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');