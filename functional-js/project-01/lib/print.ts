export function printSequences (sequences: Array<string[]>) {
    sequences.forEach(sequence => {
        console.log(sequence.join(','));
    });    
}