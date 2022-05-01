'use strict';

/*
 * Private static fields and functions
 */
// TODO: private static fields/methods declaration

/**
 * ComponentName class
 *
 * @class
 * @author Author Name
 * @version v1.0
 * @constructor
 * @param {ContextController} [cp] Same as `this`
 * @this {ContextController}
 */
function ComponentName(cp) {
  /*
   * Private fields
   */
  // TODO: private fields declaration

  /*
   * Lifecycle callbacks declaration
   */

  // called before component is loaded and before applying context options
  this.init = function() {/* ... */};

  // called after loading, when the component is created
  this.create = function() {/* ... */};

  // called when the component is disposed
  this.dispose = function() {/* ... */};

  // called each time the data model is updated
  this.update = function(target, key, value, path, old) {/* ... */};

  /*
   * Private functions
   */
  // TODO: private methods implementation
}

module.exports = ComponentName;
