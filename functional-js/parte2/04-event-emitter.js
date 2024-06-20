const fs = require('fs');

const readStream = fs.createReadStream('./res/1MB-file.txt', { encoding: 'utf8' });

// o arquivo eh lido por partes, i.e. 'chunks'
// a cada leitura de parte dos dados, o evento 'data' eh disparado
readStream.on('data', (chunk) => {
    console.log(`Event: data, Chunk: ${chunk.length}`);
});

// Chamado uma unica vez quando o stream nao tem mais dados 
readStream.on('end', () => {
    console.log('end');
});