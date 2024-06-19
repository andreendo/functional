import R from 'ramda';
import { extractTransitionsFromFile } from './parse';
import { printSequences } from './print';
import { buildFsm } from './fsm';
import { generateW } from './w';


R.ifElse(
    (nArgs: number) => nArgs < 3,
    () => console.log('Invalid number of arguments'),
    () => {
        R.pipe(
            extractTransitionsFromFile,
            buildFsm,
            generateW,
            printSequences
        )(process.argv[2])
    }
)(process.argv.length)
