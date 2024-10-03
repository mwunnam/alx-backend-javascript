const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.stricEqual(calculateNumber(1, 2), 3);
  });

  it('shoud return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 4.6), 6);
  });

});
