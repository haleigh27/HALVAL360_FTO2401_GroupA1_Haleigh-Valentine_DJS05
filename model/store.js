import { Action } from './actions.js';
import { reducer } from './reducers.js';

/**
 * @typedef {object} State
 * @prop {number} count
 */

export const State = {};

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
export const states = [
    {
        count: 0,
    },
];

/**
 * Function which gets the latest (current) state
 *
 * @return {State}
 */
export const getState = () => {
    return Object.freeze({ ...states[0] });
};

/**
 * Dispatch function which updates the state and calls the functions in the subscribers array.
 *
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action);

    subscribers.forEach((item) => item(prev, next));
    states.unshift(next);
};

/**
 * Subscribe function which accepts a callback function as a parameter. The callback function gets added to an the subscribers array (array of functions which are executed when the state changes).
 *
 * @param {Subscription} subscription - Callback function with two parameters for the previous and next state.
 * @return {function(): void} - unsubscribe function which can be used to remove a function currently in the subscribers array
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription);
    const handler = (item) => item !== subscription;

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler);
        subscribers = newSubscribers;
    };

    return unsubscribe;
};
