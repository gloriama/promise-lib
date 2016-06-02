var assert = require('chai').assert;
var Promise = require('../src/no-chaining');

describe('No Chaining', function() {
  var promise;

  beforeEach(function() {
    promise = new Promise();
  });

  it('should have methods then, resolve, and reject', function() {
    assert.isFunction(promise.then);
    assert.isFunction(promise.resolve);
    assert.isFunction(promise.reject);
  });

  describe('then', function() {
    var callback;

    beforeEach(function() {
      callback = function(value) {
        console.log(value);
      };
      promise.then(callback);
    });

    it('should push argument to functionsToCall', function() {
      assert.equal(callback, promise.functionsToCall[0]);
    });
  });
});