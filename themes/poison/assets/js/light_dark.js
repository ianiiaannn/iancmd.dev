const themeButton = document.querySelector('.btn-light-dark')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')

const themeFromLS = localStorage.getItem('theme')
const themeFromHugo = document.body.classList.contains('dark-theme')
  ? 'dark'
  : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo

function giscusTheme(theme) {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return
  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: `${theme}`,
        },
      },
    },
    'https://giscus.app',
  )
}

if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme')
  moon.style.display = 'none'
  sun.style.display = 'block'
} else {
  document.body.classList.remove('dark-theme')
  moon.style.display = 'block'
  sun.style.display = 'none'
}

themeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme')
  let theme = 'light'

  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark'
    moon.style.display = 'none'
    sun.style.display = 'block'
  } else {
    moon.style.display = 'block'
    sun.style.display = 'none'
  }
  giscusTheme(theme)
  localStorage.setItem('theme', theme)
})

window.addEventListener('message', (message) => {
  if (message.origin === 'https://giscus.app') giscusTheme(currentTheme)
})
