/**
 * CheckValidityBehavior class.
 * @return {Array.<Object.<string, EventCallback>>}
 * @constructor
 */
function CheckValidityBehavior() {
  const errorColor = 'mdl-color-text--red-900';
  const messageColor = 'mdl-color-text--blue-grey-400';
  const handleChange = (e, $el) => {
    const el = $el.get();
    const describedBy = $el.attr('aria-describedby');
    if (describedBy) {
      const messageContainer = zuix.$.find('#' + describedBy);
      if (el.validationMessage.length > 0) {
        messageContainer
            .addClass(errorColor)
            .removeClass(messageColor)
            .html(el.validationMessage).show();
        $el.attr('aria-invalid', true);
        //if (el.reportValidity) {
        //  el.reportValidity();
        //}
      } else {
        messageContainer
            .addClass(messageColor)
            .removeClass(errorColor)
            .html($el.value() !== '' ? '' : $el.attr('message'));
        $el.attr('aria-invalid', false);
      }
    }
  };
  return {
    'component:ready': (e, data, $el) => {
      const view = zuix.context($el).$;
      view.on('input', handleChange);
      handleChange(e, $el);
    }
  };
}
export {CheckValidityBehavior};
