var assert = require('chai').assert;
var util = require('../public/js/util.js');

describe('util.add', function() {
  it('should add two numbers', function() {
    assert.equal( add(2, 3), 5);
  });
});

describe('util.subtract', function() {
  it('should subtract a number from another', function() {
    assert.equal( subtract(3, 2), 1);
  });
});
