/**
 * Increase count by one
 *
 * @typedef {object} ADD
 * @prop {'ADD'} type
 */

/**
 * @returns {ADD}
 */
export const ADD = () => ({ type: 'ADD' });

/**
 * Decrease count by one
 *
 * @typedef {object} SUBTRACT
 * @prop {'SUBTRACT'} type
 */

/**
 * @returns {SUBTRACT}
 */
export const SUBTRACT = () => ({ type: 'SUBTRACT' });

/**
 * Reset count to zero
 *
 * @typedef {object} RESET
 * @prop {'RESET'} type
 */

/**
 * @returns {RESET}
 */
export const RESET = () => ({ type: 'RESET' });

/**
 * @typedef {ADD | SUBTRACT | RESET } Action
 */

export const Action = {};
