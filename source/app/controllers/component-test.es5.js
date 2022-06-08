'use strict';

// private static field
let staticField = 42;

// private static method
function staticMethod() {
  console.log(staticField++);
}

/**
 * @class
 * @type {ContextController}
 * @this {ContextController}
 */
function ComponentTest() {
  // private fields
  const DELIMITER = '---';
  let privateField = 0;

  // public component's methods declaration

  this.expose({
    // expose `privateMethod` method as public with the name `test`
    test: privateMethod
  });

  /* life-cycle callbacks */
  this.init = function() { };
  this.create = function() { };
  this.dispose = function() { };
  this.update = function(target, key, value, path, old) { };

  // private methods

  function privateMethod() {
    staticMethod();
    console.log(DELIMITER, privateField++, staticField);
  }
}

module.exports = ComponentTest;
