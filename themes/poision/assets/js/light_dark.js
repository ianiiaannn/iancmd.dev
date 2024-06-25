const btn = document.querySelector(".btn-light-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const utterances = document.querySelector('.utterances-frame')

const themeFromLS = localStorage.getItem("theme")
const themeFromHugo = document.body.classList.contains("dark-theme") ? "dark" : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

function utterancesTheme(theme) {
  if (document.querySelector('.utterances-frame')) {
    const message = {
      type: 'set-theme',
      theme: `github-${theme}`
    };
    const iframe = document.querySelector('.utterances-frame');
    iframe.contentWindow.postMessage(message, '*');
  }
}


if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  moon.style.display = 'none';
  sun.style.display = 'block';
} else {
  document.body.classList.remove("dark-theme");
  moon.style.display = 'block';
  sun.style.display = 'none';
}


btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let theme = "light";

  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    moon.style.display = 'none';
    sun.style.display = 'block';
    utterancesTheme(theme);
  } else {
    moon.style.display = 'block';
    sun.style.display = 'none';
    utterancesTheme(theme);
  }
  localStorage.setItem("theme", theme);
});
