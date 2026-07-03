// Save scroll position of the content container before reload
window.addEventListener('beforeunload', () => {
  const content = document.querySelector('.container.content')
  if (content) {
    sessionStorage.setItem('hugoScrollPosition', content.scrollTop)
  }
})

// Restore scroll position after reload
window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.container.content')
  const savedPosition = sessionStorage.getItem('hugoScrollPosition')
  if (content && savedPosition !== null) {
    content.scrollTop = parseInt(savedPosition)
  }
})
