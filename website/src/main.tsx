import ReactDOM from "react-dom/client"
import React from "react"

// Coin flip at load time
const variant = Math.random() < 0.5 ? "mono" : "tailwind"

document.addEventListener("DOMContentLoaded", async () => {
  const domNode = document.getElementById("root")!
  const root = ReactDOM.createRoot(domNode)

  if (variant === "mono") {
    await import("./mono.css")
    const { default: Portfolio } = await import("./mono/Portfolio")
    root.render(<Portfolio />)
  } else {
    await import("./tailwind.css")
    const { default: Portfolio } = await import("./tailwind/Portfolio")
    root.render(<Portfolio />)
  }
})
