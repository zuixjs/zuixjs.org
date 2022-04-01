/**
 * ViewSwitchBehavior class.
 * @return {Array.<Object.<string, EventCallback>>}
 * @constructor
 */
function ViewSwitchBehavior(defaultOrientation) {
  const viewSelectedOption = 'view-selected';
  const eventHandlers = []; // keep track of allocated event handlers
  const ViewSwitchCallbacks = function(_el) {
    const el = _el;
    this.select = function() {
      el.addClass('mdl-color--lime-300');
    };
    this.deselect = function() {
      el.removeClass('mdl-color--lime-300');
    };
    return this;
  };
  const onReady = (e, $el) => {
    const target = zuix.field($el.attr('target'));
    if (target.get() === undefined) return;
    $el.css('cursor', 'pointer');
    target.css({position: 'absolute', width: '100%', height: '100%'});
    const evt = {el: $el.get(), cb: new ViewSwitchCallbacks($el)};
    eventHandlers.push(evt);
    target.on('select', evt.cb.select);
    target.on('deselect', evt.cb.deselect);
    if (target.attr(viewSelectedOption)) {
      target.addClass('animate__animated').show()
          .playAnimation('animate__flip');
      target.trigger('select');
    } else {
      target.hide();
      target.trigger('deselect');
    }
  };
  const onDispose = (e, $el) => {
    const target = zuix.field($el.attr('target'));
    if (target.get() === undefined) return;
    const evt = eventHandlers
        .find((ev) => ev.el === $el.get());
    target
        .off('select', evt.cb.select)
        .off('deselect', evt.cb.deselect);
    evt.cb.deselect();
    $el.css('cursor', 'initial');
  };
  let busy = false;
  const onClick = (e, data, $el) => {
    // element $el clicked
    if (busy) return;
    busy = true;
    const orientation = $el.attr('orientation') || defaultOrientation;
    const target = zuix.field($el.attr('target'));
    if (target.get() === undefined) {
      busy = false;
      return;
    }
    let current = target.show()
        .parent().find('[view-selected]');
    if (current.get() == null) {
      current = target.parent().children().eq(0);
    }
    const indexOld = current.index();
    const indexNew = target.index();
    if (indexOld === indexNew) {
      busy = false;
      return;
    }
    // Animation effects values:
    // 'bounce', 'fade', 'slide', 'zoom', 'back'
    // 'lightSpeed' (<-- this one only works with horizontal orientation)
    const animation = 'animate__' + ($el.attr('animation') || 'fade');
    const direction = indexOld > indexNew ? 0 : 1;
    let outFx;
    let inFx;
    if (orientation === 'vertical') {
      inFx = outFx = (direction === 1 ? 'Up' : 'Down');
    } else { // horizontal is the default
      outFx = (direction === 1 ? 'Left' : 'Right');
      inFx = (direction === 1 ? 'Right' : 'Left');
    }
    const opts = {duration: '500ms'};
    current.addClass('animate__animated').playAnimation({
      classes: animation + 'Out' + outFx,
      options: opts,
      onEnd: () => {
        // deselect current view
        current.hide().attr(viewSelectedOption, null);
      }
    });
    target.addClass('animate__animated').playAnimation({
      classes: animation + 'In' + inFx,
      options: opts,
      onEnd: () => {
        // select new one
        target.attr(viewSelectedOption, 'true');
        busy = false;
      }
    }).show();
    // trigger sate change in bound elements
    current.trigger('deselect');
    target.trigger('select');
  };
  return {
    'component:ready': onReady,
    'component:dispose': onDispose,
    'click': onClick
  };
}

export {ViewSwitchBehavior};
