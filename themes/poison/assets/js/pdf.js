function pdf() {
  document.querySelector('.sidebar').remove()
  document.querySelector('.article-toc').remove()
  document.querySelector('.comments').remove()
  document.body.removeAttribute('class')

  window.print()
}
