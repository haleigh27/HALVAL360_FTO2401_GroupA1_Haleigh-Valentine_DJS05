/**
 * Increase count by one
 *
 * @typedef {object} Add
 * @prop {'ADD'} type
 */

/**
 * @returns {Add}
 */
export const add = () => ({ type: 'ADD' });

/**
 * Decrease count by one
 *
 * @typedef {object} Subtract
 * @prop {'SUBTRACT'} type
 */

/**
 * @returns {Subtract}
 */
export const subtract = () => ({ type: 'SUBTRACT' });

/**
 * Reset count to zero
 *
 * @typedef {object} Reset
 * @prop {'RESET'} type
 */

/**
 * @returns {Reset}
 */
export const reset = () => ({ type: 'RESET' });

/**
 * @typedef {Add | Subtract| Reset } Action
 */

export const Action = {};
