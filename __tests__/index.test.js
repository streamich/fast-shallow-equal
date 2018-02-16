const cases = require('./cases');
const {equal} = require('../index');

describe('fast-shallow-equal', () => {
  cases.forEach(([name, tests]) => {
    describe(name, () => {
      tests.forEach(({name, a, b, result}) =>
        it(name, () => expect(equal(a, b)).toBe(result))
      );
    });
  });
});
