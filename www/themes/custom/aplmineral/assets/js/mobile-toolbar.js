(function ($) {
  var $html = $('html')
  var $toolbar = $('.mobile-toolbar')
  var $btnHome = $toolbar.find('.mobile-toolbar__home')
  var $btnMenu = $toolbar.find('.mobile-toolbar__hamburger')
  var $btnSearch = $toolbar.find('.mobile-toolbar__search')

  var $layers = $toolbar.find('.mobile-toolbar-layer')
  var $searchLayer = $toolbar.find('.mobile-toolbar-layer--search')
  var $menuLayer = $toolbar.find('.mobile-toolbar-layer--menu')

  var $searchField = $searchLayer.find('input')


  // Listeners
  $btnHome.on('click', handleHomeClick)
  $btnMenu.on('click', handleMenuClick)
  $btnSearch.on('click', handleSearchClick)

  // Handler to Home button.
  function handleHomeClick(event) {
    if (window.location.pathname === '/') {
      event.preventDefault()
      jumpToTop()
    }
  }


  // Handler to Menu button.
  function handleMenuClick(event) {
    event.preventDefault()

    if ($menuLayer.hasClass('is-visible')) {
      closeLayer()
      return
    }

    closeLayer()
    $html.addClass('no-scroll')
    $menuLayer.addClass('is-visible')
  }


  // Handler to Search button.
  function handleSearchClick(event) {
    event.preventDefault()

    if ($searchLayer.hasClass('is-visible')) {
      closeLayer()
      return
    }

    closeLayer()
    $html.addClass('no-scroll')
    $searchLayer.addClass('is-visible')
    $searchField.focus()
  }


  // Move to the top of the page.
  function jumpToTop() {
    $html.animate({
      scrollTop: 0
    }, 600)
  }

  // Close all layers.
  function closeLayer() {
    $html.removeClass('no-scroll')
    $layers.removeClass('is-visible')
    $searchField.blur()
  }

})(jQuery)
