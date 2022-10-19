import { Rx, Ry, Rz, multiply, project, multiplyWithPoint, rotatePoint } from "./camera.js"
import { randomStar, sampleStars } from "./random.js"

const controls = {
  stars: 1000,
  speed: 3,
  rotation: 0,
  spread: 20,
  length: 1,
  width: 2,
  color: "#ffffff",
  backgroundColor: "#000000",
  rx: 0,
  ry: 0,
  rz: 0,
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const W = window.innerWidth
  const H = window.innerHeight
  canvas.width = W
  canvas.height = H

  // Camera calibration matrix
  const K = [
    [W, 0, W / 2, 0],
    [0, H, H / 2, 0],
    [0, 0, 1, 0],
  ]
  // Camera rotation matrix
  let R = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
  const stars = {
    100: sampleStars(100, controls.spread, controls.length),
    1000: sampleStars(1000, controls.spread, controls.length),
    10000: sampleStars(10000, controls.spread, controls.length),
  }

  // Toggle controls visibility
  document.getElementById("hide").addEventListener("click", e => {
    document.getElementById("controls-wrapper").classList.toggle("hidden")
    e.target.textContent = e.target.textContent === "«" ? "»" : "«"
  })

  // Rotate the camera
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" || e.key === "w") {
      controls.rx += 0.02
    } else if (e.key === "ArrowDown" || e.key === "s") {
      controls.rx -= 0.02
    } else if (e.key === "ArrowLeft" || e.key === "a") {
      controls.ry -= 0.02
    } else if (e.key === "ArrowRight" || e.key === "d") {
      controls.ry += 0.02
    }

    controls.rx = Math.max(controls.rx, -Math.PI / 2)
    controls.rx = Math.min(controls.rx, Math.PI / 2)
    controls.ry = Math.max(controls.ry, -Math.PI / 2)
    controls.ry = Math.min(controls.ry, Math.PI / 2)

    const r = multiply(multiply(Rx(controls.rx), Ry(controls.ry)), Rz(controls.rz))
    R = [
      [...r[0], 0],
      [...r[1], 0],
      [...r[2], 0],
      [0, 0, 0, 1],
    ]
  })

  // Setup event handlers for the controls
  for (const key of Object.keys(controls)) {
    if (key === "rx" || key === "ry" || key === "rz") {
      // Already handled
    } else if (key === "color" || key === "backgroundColor") {
      const elem = document.getElementById(key)
      elem.value = controls[key]
      elem.addEventListener("change", e => {
        const value = e.target.value
        controls[key] = value
      })
    } else if (key === "stars") {
      document.getElementById(controls.stars).checked = true
      ;[...document.querySelectorAll('input[name="stars"]')].forEach(elem => {
        elem.addEventListener("change", () => {
          const value = document.querySelector('input[name="stars"]:checked').value
          controls.stars = parseInt(value)
        })
      })
    } else {
      const elem = document.getElementById(key)
      elem.value = controls[key]
      elem.addEventListener("input", e => {
        const value = e.target.value
        controls[key] = parseFloat(value)
        document.getElementById(`${key}-value`).innerText = controls[key]
      })
    }
  }

  function draw() {
    const { start, end } = stars[controls.stars]

    // Reset canvas
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = controls.backgroundColor
    ctx.fillRect(0, 0, W, H)

    for (let i = 0; i < controls.stars; i++) {
      // Move the star closer
      start[i][2] -= controls.speed
      end[i][2] -= controls.speed

      // Rotate around the z-axis
      start[i] = rotatePoint(start[i], controls.rotation)
      end[i] = rotatePoint(end[i], controls.rotation)

      // Apply camera rotation
      const startRot = multiplyWithPoint(R, start[i])
      const endRot = multiplyWithPoint(R, end[i])

      // Remove stars which are not visible i.e. z <= 0
      if (startRot[2] <= 0) {
        const [s, e] = randomStar(controls.spread, controls.length)
        start[i] = s
        end[i] = e
        continue
      }

      // Project to 2d
      const startProj = project(K, startRot)
      const endProj = project(K, endRot)

      // Draw the line
      ctx.strokeStyle = controls.color
      ctx.lineWidth = controls.width
      ctx.beginPath()
      ctx.moveTo(...startProj)
      ctx.lineTo(...endProj)
      ctx.stroke()
    }

    requestAnimationFrame(draw)
  }

  requestAnimationFrame(draw)
})
