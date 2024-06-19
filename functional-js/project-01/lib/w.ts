import { concat } from './sequence';
import { FSM } from './fsm';

interface QueueElement {
    seq: string[];
    state: string;
}

// breadth-first search
const getTransitionCover = (fsm: FSM): Array<string[]> => {
    const visitedStates: string[] = [];
    const sequences: Array<string[]> = [[]];
    const queue: QueueElement[] = [{ seq: [], state: fsm.initialState }];
    while (queue.length > 0) {
        const { seq, state } = queue.shift()!; // get first
        if (! visitedStates.includes(state)) {
            visitedStates.push(state);
            for (let outTransition of fsm.transitionsOutgoingOf[state]) {
                const newSeq = concat(seq, [outTransition.input]);
                sequences.push(newSeq);
                queue.push({ seq: newSeq, state: outTransition.outState });
            }
        }
    }

    return sequences;
}

interface Pair {
    a: string;
    b: string;
}

const pairsOfDifferentStates = (states: string[]): Pair[] => {
    const pairs: Pair[] = [];

    for (let i = 0; i < states.length; i++) {
        for (let j = i + 1; j < states.length; j++) {
            pairs.push({ a: states[i], b: states[j] });
        }
    }

    return pairs;
}

const distinguish = (fsm: FSM, state1: string, state2: string, sequence: string[]): boolean => {
    for (const input of sequence) {
        const t1 = fsm.transitionsOutgoingOf[state1].find(t => t.input == input);
        const t2 = fsm.transitionsOutgoingOf[state2].find(t => t.input == input);
        
        if (t1 == undefined || t2 == undefined)
            return false;

        if (t1.output != t2.output)
            return true;

        if (t1.outState == t2.outState) //converges to the same state
            return false;
        
        state1 = t1.outState;
        state2 = t2.outState;
    }

    return false;
}

/**
 * 
 * @param fsm 
 * @returns 
 * 
 * Optimization to do: if converge to same state, stop expanding a sequence to the given pair
 */
const getWset = (fsm: FSM): Array<string[]> => {
    const wSet: Array<string[]> = [];
    const candidates: Array<string[]> = [[]]; // starts with epsilon
    let undistinguishedPairs = pairsOfDifferentStates(fsm.states);
    while (undistinguishedPairs.length > 0) {
        const seq = candidates.shift()!;
        const numOfUndistinguishedPairsSoFar = undistinguishedPairs.length;
        undistinguishedPairs = undistinguishedPairs.filter(p => !distinguish(fsm, p.a, p.b, seq));

        if (undistinguishedPairs.length < numOfUndistinguishedPairsSoFar) // If some pairs are distinguished
            wSet.push(seq); // add seq to W

        // expand the candidate sequences
        fsm.inputs.map(input => concat(seq, [input])).forEach(s => candidates.push(s));
    }

    return wSet;
}

export const generateW = (fsm: FSM): Array<string[]> => {
    const T = getTransitionCover(fsm);    
    // console.log(T);
    const W = getWset(fsm);
    console.log(W);
    process.exit();

    // concat T and W

    // Remove prefixes

    return T;
}