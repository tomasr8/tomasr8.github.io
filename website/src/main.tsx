import ReactDOM from "react-dom/client"
import React from "react"

import Portfolio from "./Portfolio"


document.addEventListener("DOMContentLoaded", () => {
    const domNode = document.getElementById("root")
    const root = ReactDOM.createRoot(domNode!)
    root.render(<Portfolio />)
})
