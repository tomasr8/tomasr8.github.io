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

function getDefaultTheme(): Theme {
  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") {
    return stored
  }
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark"
  }
  return "light"
}

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme())

  useEffect(() => {
    // Set both mechanisms so it works for Tailwind (.dark class)
    // and mono.css (data-theme attribute)
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
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
