var Drupal = Drupal || {};

(function($, Drupal) {
  Drupal.behaviors.APL_a11y = {
    attach: function (context, settings) {
      var $body = jQuery('body')
      var $btnHighContrast = jQuery('#a11y-high-contrast-button')
      var isActive = false
      var cssClasses = 'high-contrast contraste'

      $btnHighContrast.on('click', highContrast)

      function highContrast(event) {
        event.preventDefault()

        if (isActive) {
          isActive = false
          $body.removeClass(cssClasses)
        } else {
          isActive = true
          $body.addClass(cssClasses)
        }
      }
    }
  }
})(jQuery, Drupal);
