const storedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark)

if (defaultDark) {
  localStorage.setItem("theme", theme)
  document.documentElement.setAttribute("data-theme", theme)
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("switch-theme")
  toggleBtn.checked = defaultDark

  const setTheme = theme => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
    toggleBtn.checked = theme === "dark"
  }

  document.getElementById("switch-theme").addEventListener("change", () => {
    const theme = toggleBtn.checked ? "dark" : "light"
    setTheme(theme)
  })
})
