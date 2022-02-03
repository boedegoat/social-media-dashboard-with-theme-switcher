import { handleThemeChange } from './lib'

const themeSwitcher = document.getElementById('theme-switcher')

if (localStorage.theme === 'dark') {
  themeSwitcher.checked = false
} else {
  localStorage.theme = 'light'
  themeSwitcher.checked = true
}

themeSwitcher.addEventListener('click', () => {
  if (themeSwitcher.checked) {
    localStorage.theme = 'light'
    handleThemeChange()
  } else {
    localStorage.theme = 'dark'
    handleThemeChange()
  }
})
