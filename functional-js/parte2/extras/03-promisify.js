import util from 'node:util';
import { stat } from 'node:fs';


// stat('.', (err, stats) => {
//     if (err) throw err;

//     console.log(stats);
// });

const statP = util.promisify(stat);

async function main() {
    const stats = await statP('./package.json');
    console.log(stats);
}

main().catch(console.error);