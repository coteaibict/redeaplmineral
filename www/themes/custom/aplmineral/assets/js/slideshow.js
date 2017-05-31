var Drupal = Drupal || {};

(function($, Drupal) {
  Drupal.behaviors.APL_slideshow = {
    attach: function (context, settings) {
      var selector = '.view-display-id-slideshow_block .view-content .item-list > ul';
      var $context = $(context);
      var $slideshow = $context.find(selector);
      var options = {
        adaptiveHeight: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
      };

      $slideshow.slick(options);

      var $image = $slideshow.find('.views-field-field-image img');
      setElementsHeight();

      $(window).on('resize', setElementsHeight);

      function setElementsHeight() {
        var height = $image.height();
        if (height && height > 0) {
          $('.slick-arrow').css({ 'top': (height / 2) });
          $('.slick-dots').css({ 'top': (height - 20) });
        }
      }
    }
  }
})(jQuery, Drupal);
