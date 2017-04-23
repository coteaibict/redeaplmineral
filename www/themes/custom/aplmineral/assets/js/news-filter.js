(function ($) {
  var $context = $('.view-teaser-news')
  var $select = $context.find('#edit-items-per-page')
  var $options = $select.find('option')
  var $btnSubmit = $context.find('.view-filters input[type="submit"]')

  $select.on('change', handleFilterChange)

  function handleFilterChange() {
    $btnSubmit.trigger('click')
  }
})(jQuery)
