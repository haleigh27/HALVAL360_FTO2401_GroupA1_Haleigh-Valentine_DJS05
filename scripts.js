import { add, subtract, reset } from './model/actions.js';
import { dispatch, subscribe, getState } from './model/store.js';

subscribe((_, next) => console.log(next));

// SCENARIO 1: Initial State Verification
console.log(getState());

// SCENARIO 2: Incrementing the Counter
dispatch(add());
dispatch(add());

// SCENARIO 3: Decrementing the Counter
dispatch(subtract());

// SCENARIO 4: Resetting the Counter
dispatch(reset());
