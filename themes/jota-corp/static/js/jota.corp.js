(function() {
  window.addEventListener('click', function(event) {
    var onPageMenus = document.querySelectorAll('header nav ul li.on-page a')
    var target = event.target

    for (var i = 0; i < onPageMenus.length; i++) {
      if(target === onPageMenus[i]) {
        var id = target.href.split('#')[1]

        if (!id) { break }

        var scrollTarget = document.querySelector('#' + id)

        event.preventDefault()
        scrollTarget.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})()