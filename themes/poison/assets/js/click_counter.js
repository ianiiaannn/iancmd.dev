try {
  const clickCounter = document.getElementById('click-counter')
  const clickCount = await (
    await fetch('/click-counter', {
      method: 'POST',
      body: window.location.pathname,
    })
  ).text()
  if (clickCounter == null) return
  clickCounter.innerText = clickCount
} catch (_) {}
