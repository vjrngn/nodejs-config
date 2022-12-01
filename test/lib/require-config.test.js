const { MissingConfigError } = require('../../src/lib/exceptions/missing-config-error');
const { requireConfig } = require('../../src/lib/require-config')

describe('requireConfig', () => {
  it('throws when a key is missing', () => {
    const env = {
      FOO: 'bar',
    };

    const required = ['FOO', 'BAR'];

    try {
      requireConfig(env, required)
    } catch (e) {
      expect(e).toBeInstanceOf(MissingConfigError);
      expect(e.missingKeys).toEqual(["BAR"]);
    }
  });

  it('throws when a supplied key does not have a value', () => {
    const env = {
      FOO: '',
    };

    const required = ['FOO'];

    try {
      requireConfig(env, required)
    } catch (e) {
      expect(e.missingKeys).toEqual(["FOO"]);
    }
  })

  it('returns source when all values are valid', () => {
    const env = {
      FOO: 'bar',
    };

    const required = ['FOO'];

    expect(requireConfig(env, required)).toEqual({
      FOO: 'bar'
    });
  });
});
