import { ADD, SUBTRACT, RESET } from './model/actions.js';
import { dispatch, subscribe, getState } from './model/store.js';

subscribe((_, next) => console.log(next));

// SCENARIO 1: Initial State Verification
console.log(getState());

// SCENARIO 2: Incrementing the Counter
dispatch(ADD());
dispatch(ADD());

// SCENARIO 3: Decrementing the Counter
dispatch(SUBTRACT());

// SCENARIO 4: Resetting the Counter
dispatch(RESET());
