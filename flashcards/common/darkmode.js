const storedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark)

const setTheme = (theme, toggleBtn = null) => {
  localStorage.setItem("theme", theme)
  document.documentElement.setAttribute("data-theme", theme)
  const checked = theme === "dark"
  if (toggleBtn) {
    toggleBtn.checked = checked
  }
}

if (defaultDark) {
  setTheme("dark")
}

document.addEventListener("DOMContentLoaded", () => {
  let checked = defaultDark
  const toggleBtn = document.getElementById("switch-theme")

  const setTheme = theme => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  if (defaultDark) {
    setTheme("dark", toggleBtn)
  } else {
    setTheme("light", toggleBtn)
  }

  const toggleTheme = () => {
    if (checked) {
      setTheme("light", toggleBtn)
    } else {
      setTheme("dark", toggleBtn)
    }
    checked = !checked
  }

  document.getElementById("switch-theme").addEventListener("change", () => {
    toggleTheme()
  })
})
