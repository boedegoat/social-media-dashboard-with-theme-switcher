import { handleThemeChange } from './lib'

function initTheme() {
  handleThemeChange()

  if (localStorage.theme === 'dark') {
    localStorage.theme = 'dark'
    handleThemeChange()
  } else {
    localStorage.theme = 'light'
    handleThemeChange()
  }
}

initTheme()
