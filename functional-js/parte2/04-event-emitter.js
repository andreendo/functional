import { createReadStream } from 'node:fs';


const readStream = createReadStream('./res/1MB-file.txt', { encoding: 'utf8', highWaterMark: 1024 * 10 }); // 10kb

// o arquivo eh lido por partes, i.e. 'chunks'
// a cada leitura de parte dos dados, o evento 'data' eh disparado
readStream.on('data', (chunk) => {
    console.log(`Event: data, Chunk: ${chunk.length}`);
});

// Chamado uma unica vez quando o stream nao tem mais dados 
readStream.on('end', () => {
    console.log('end');
});