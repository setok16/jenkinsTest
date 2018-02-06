var assert = require('chai').assert;
var add = require('../public/js/util.js');

describe('add', function() {
  it('should add two numbers', function() {
    assert.equal( add(2, 3), 5);
  });
});
