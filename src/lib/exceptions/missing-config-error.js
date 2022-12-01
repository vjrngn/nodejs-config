class MissingConfigError extends Error {
  missingKeys = [];

  constructor(keys) {
    super('Missing required configuration');
    this.missingKeys = keys;
  }
}

module.exports = { MissingConfigError }
