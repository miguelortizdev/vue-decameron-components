/**
 * @fileoverview  Utilities to get information about the current environment
 * @version       0.1
 * @author        Miguel Ortiz <miguel.ortiz@decameron.com>
 */

// --- Getters ---

export const getEnv = (key: any, fallback = null) => {
  const env = typeof process !== 'undefined' && process ? process.env || {} : {};
  if (!key) {
    /* istanbul ignore next */
    return env;
  }
  return env[key] || fallback;
};

export const getNoWarn = () => getEnv('VUE_NO_WARN');
