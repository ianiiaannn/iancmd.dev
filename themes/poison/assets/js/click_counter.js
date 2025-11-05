try {
  ;(async () => {
    const clickCounter = document.getElementById('click-counter')
    const request = await fetch('/click-counter', {
      method: 'POST',
      body: window.location.pathname,
    })
    const clickCount = await request.text()
    if (clickCounter != null && request.ok) clickCounter.innerText = clickCount
  })()
} catch (_) {}
