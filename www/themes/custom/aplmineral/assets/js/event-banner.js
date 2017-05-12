var Drupal = Drupal || {};

(function($, Drupal) {
  Drupal.behaviors.slideshow = {

    attach: function (context, settings) {
      var $context = $(context)
      var $wrapper = $context.find('.block-views-blockbanner-banner-top-block')
      var $bannerContainer = $context.find('.view-display-id-banner_top_block')
      var $bannerImage = $context.find('.views-field-field-image-banner-mobile')
      var isVisible = false

      // Add toggle button.
      $bannerContainer
        .find('.views-row')
        .append('<button class="banner-toggle-button"><span>Abrir/fechar</span></button>')

      var $btnToggle = $context.find('.banner-toggle-button')
      $btnToggle.on('click', toggleEventBanner)

      function toggleEventBanner(event) {
        event.preventDefault()

        if (isVisible) {
          openEventBanner()
        } else {
          hideEventBanner()
        }
      }

      function openEventBanner() {
        isVisible = false
        $bannerContainer.removeClass('is-visible')
        $btnToggle.removeClass('is-opened')
      }

      function hideEventBanner() {
        isVisible = true
        $bannerContainer.addClass('is-visible')
        $btnToggle.addClass('is-opened')
      }
    }
  }
})(jQuery, Drupal);
