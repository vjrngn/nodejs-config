const _ = require('lodash')
const { MissingConfigError } = require('./exceptions/missing-config-error')

/**
 * Checks if the source config has all the keys required for the
 * application to function correctly, throws otherwise.
 *
 * @export
 * @param {Map<string,string>} source Variables set in the environment (or set in some source)
 * @param {Array[string]} requiredKeys Required keys
 * @returns {Array[string]} source
 */
function requireConfig(source, requiredKeys) {
  const missingKeys = []
  for (let i = 0; i < requiredKeys.length; i++) {
    const key = requiredKeys[i]
    if (!source.hasOwnProperty(key) || _.isEmpty(source[key])) {
      missingKeys.push(key)
    }
  }

  if (!_.isEmpty(missingKeys)) {
    throw new MissingConfigError(missingKeys)
  }

  return source;
}

module.exports = { requireConfig }
