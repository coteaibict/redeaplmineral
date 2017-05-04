var Drupal = Drupal || {};

(function($, Drupal) {
  Drupal.behaviors.slideshow = {
    attach: function (context, settings) {
      var selector = '.view-display-id-slideshow_block .view-content .item-list > ul';
      var $context = $(context);
      var $slideshow = $context.find(selector);
      var options = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
      };

      $slideshow.slick(options);
    }
  }
})(jQuery, Drupal);
