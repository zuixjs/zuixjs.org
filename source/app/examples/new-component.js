class NewComponent extends ControllerInstance {
  onInit() {

    // declare resources used by this component (styles, scripts, components)
    // @see https://zuixjs.org/pages/documentation/api/zuix/ContextController/#using
    this.using('style', '@cdnjs/animate.css/4.1.1/animate.min.css');

    // declare fields/methods available in the view scripting scope
    this.declare({
      /**
       * @param {Element} btn
       * @param {ZxQuery} $el
       */
      testMethod: (btn, $el) => {
        btn.disabled = true;
        // @see http://zuixjs.org/pages/documentation/api/helpers/ZxQuery/#playAnimation
        $el.playAnimation({
          classes: [
            'animate__bounceIn', // initial state
            'animate__rollIn',
            'animate__rollOut',
            'animate__bounceIn'  // final state
          ],
          onEnd: () => btn.disabled = false
        });
      }
    });

    // set initial style/classes for the title element
    this.field('title')
        .addClass('animate__animated animate__bounceIn animate__fast');

  }

  onCreate() {
  }

  onDispose() {
  }
}
