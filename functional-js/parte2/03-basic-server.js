const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('some request');

    // leitura async libera o event loop para processar outras requisicoes
    fs.readFile('./html/basic.html', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
            return;
        }

        res.send(data);
    });

});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');