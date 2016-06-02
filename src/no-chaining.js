var PENDING = 0;
var RESOLVED = 1;
var REJECTED = 2;

var Promise = function() {
  this.state = PENDING;
  this.resolveValue;
  this.functionsToCall = [];
};

Promise.prototype.then = function(callback) {
  this.functionsToCall.push(callback);
};

Promise.prototype.resolve = function(value) {
  this.resolveValue = value;
};

Promise.prototype.reject = function() {

};


module.exports = Promise;