interface Transition {
    inState: string;
    input: string;
    output: string;
    outState: string;
}

export interface FSM {
    initialState: string;
    states: Array<string>;
    inputs: Array<string>;
    outputs: Array<string>;
    transitions: Transition[];
    transitionsOutgoingOf: { [key: string]: Transition[] };
    transitionsIncomingTo: { [key: string]: Transition[] };
}

const labelTransition = (el: Array<string>): Transition => ({ 
    inState: el[0],
    input: el[1], 
    output: el[2],
    outState: el[3]
});

export const buildFsm = (transitions: Array<string[]>): FSM => {
    const states = new Set<string>();
    const inputs = new Set<string>();
    const outputs = new Set<string>();
    const lTransitions = new Array<Transition>();
    const transitionsOutgoingOf: { [key: string]: Transition[] } = {};
    const transitionsIncomingTo: { [key: string]: Transition[] } = {};

    transitions.forEach(el => {
        const [inState, input, output, outState] = el;
        states.add(inState);
        states.add(outState);
        inputs.add(input);
        outputs.add(output);
        const lt = labelTransition(el);
        lTransitions.push(lt);

        if (!transitionsOutgoingOf[inState]) 
            transitionsOutgoingOf[inState] = [];
        
        transitionsOutgoingOf[inState].push(lt);

        if (!transitionsIncomingTo[outState])
            transitionsIncomingTo[outState] = [];

        transitionsIncomingTo[outState].push(lt);
    });

    return {
        states: Array.from(states),
        inputs: Array.from(inputs),
        outputs: Array.from(outputs),
        transitions: lTransitions,
        initialState: lTransitions[0].inState,
        transitionsOutgoingOf,
        transitionsIncomingTo
    };
}
