
(function ($) {

  var $wrapper = jQuery('.banner-event')
  var $btnToggle = $wrapper.find('.banner-event__toggle')
  var isVisible = false
  var imageHeight = $wrapper.find('.banner-event__content img').height()

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
    $wrapper.removeClass('is-visible')
    $btnToggle.removeClass('is-opened')

    $wrapper.find('.banner-event__content').slideDown()
  }

  function hideEventBanner() {
    isVisible = true
    $wrapper.addClass('is-visible')
    $btnToggle.addClass('is-opened')
  }

})(jQuery)
