/**
 * @fileoverview  Array
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */

// --- Static ---

export const from = Array.from
export const isArray = Array.isArray

// --- Instance ---

export const arrayIncludes = (array : Array<any>[], value: any) => array.indexOf(value) !== -1
export const concat = (...args: Array<any>) => Array.prototype.concat.apply([], args)
