const themeSwitcher = document.getElementById('theme-switcher')

function initTheme() {
  const isLocalThemeExist = 'theme' in localStorage
  if (!isLocalThemeExist && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    return
  }

  const localTheme = localStorage.theme
  if (localTheme === 'dark') {
    themeSwitcher.checked = false
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  } else {
    themeSwitcher.checked = true
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  }
}

themeSwitcher.addEventListener('click', () => {
  if (themeSwitcher.checked) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
})

window.addEventListener('load', () => initTheme())
