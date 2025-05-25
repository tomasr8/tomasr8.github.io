import React, { useState, useEffect, createContext } from "react"

type Theme = "light" | "dark"

type AppContextType = {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

export const AppContext = createContext<AppContextType>({
  theme: "dark",
  isDark: true,
  toggleTheme: () => {},
})

function getDefaultTheme() {
  const isDarkMode =
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia &&
      !window.matchMedia("(prefers-color-scheme: light)").matches)
  return isDarkMode ? "dark" : "light"
}

function storeTheme(theme: Theme) {
  localStorage.setItem("theme", theme)
}

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme())

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    storeTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
