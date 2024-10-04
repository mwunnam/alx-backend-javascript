const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('shoud return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 4.6), 6);
  });

  it('should return 0 when 0 and 0 are sumed', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should retun a rounded number with a float and integer', () => {
    assert.strictEqual(calculateNumber(1.5, 4), 6);
    });
  it('should return a rounder number with an integer and a float', () => {
    assert.strictEqual(calculateNumber(4, 1.5), 6);
  });
});
