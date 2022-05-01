/**
 * Class ComponentName.
 *
 * @author Author Name
 * @version v1.0
 * @extends ControllerInstance
 */
class ComponentName extends ControllerInstance {
  /**
   * @constructor
   * @param {ContextController} controller The controller instance.
   */
  constructor(controller) {
    super(controller);
  }
  /**
   * @type {ContextControllerInitCallback}
   */
  onInit() {
    const ctx = this.controller.context;
    console.log(ctx.componentId, 'initialized as context', ctx.contextId);
  }
  /**
   * @type {ContextControllerCreateCallback}
   */
  onCreate() {
    console.log('It works!', this);
  }
  /**
   * @type {ContextControllerDisposeCallback}
   */
  onDispose() {
  }
  /**
   * @type {ContextControllerUpdateCallback}
   */
  onUpdate(target, key, value, path, old) {
  }
}

module.exports = ComponentName;
