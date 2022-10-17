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

let R = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]

function Rx(angle) {
  return [
    [1, 0, 0],
    [0, Math.cos(angle), Math.sin(angle)],
    [0, -Math.sin(angle), Math.cos(angle)],
  ]
}

function Ry(angle) {
  return [
    [Math.cos(angle), 0, -Math.sin(angle)],
    [0, 1, 0],
    [Math.sin(angle), 0, Math.cos(angle)],
  ]
}

function Rz(angle) {
  return [
    [Math.cos(angle), Math.sin(angle), 0],
    [-Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1],
  ]
}

function multiply(A, B) {
  const m = A.length
  const n = B.length
  const p = B[0].length
  const C = Array(m)
    .fill(0)
    .map(() => Array(p).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j]
      }
    }
  }

  return C
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hide").addEventListener("click", e => {
    document.getElementById("controls-wrapper").classList.toggle("hidden")
    e.target.textContent = e.target.textContent === "«" ? "»" : "«"
  })

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

  for (const key of Object.keys(controls)) {
    if (key === "color" || key === "backgroundColor") {
      const elem = document.getElementById(key)
      elem.value = controls[key]
      elem.addEventListener("change", e => {
        const value = e.target.value
        controls[key] = value
        console.log(value)
      })
    } else if (key === "rx" || key === "ry" || key === "rz") {
      // Already handled
    } else if (key === "stars") {
      document.getElementById(controls.stars).checked = true
      ;[...document.querySelectorAll('input[name="stars"]')].forEach(elem => {
        elem.addEventListener("change", () => {
          const value = document.querySelector('input[name="stars"]:checked').value
          controls.stars = parseInt(value)
          console.log("value", value)
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

  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const W = window.innerWidth
  const H = window.innerHeight

  canvas.width = W
  canvas.height = H

  function rotatePoint(point, angle) {
    return [
      Math.cos(angle) * point[0] - Math.sin(angle) * point[1],
      Math.sin(angle) * point[0] + Math.cos(angle) * point[1],
      point[2],
      point[3],
    ]
  }

  function randn_bm() {
    let u = 1 - Math.random() //Converting [0,1) to (0,1)
    let v = Math.random()
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  }

  function sampleLine() {
    const x = randn_bm() * controls.spread * 2 - controls.spread
    const y = randn_bm() * controls.spread * 2 - controls.spread
    const z = randn_bm() * 100 + 300
    return [
      [x, y, z, 1],
      [x, y, z + controls.length, 1],
    ]
  }

  function samplePoints(n) {
    const start = []
    const end = []

    for (let i = 0; i < n; i++) {
      const [s, e] = sampleLine()
      start.push(s)
      end.push(e)
    }

    return { start, end }
  }

  const points = {
    100: samplePoints(100),
    1000: samplePoints(1000),
    10000: samplePoints(10000),
  }

  const K = [
    [W, 0, W / 2, 0],
    [0, H, H / 2, 0],
    [0, 0, 1, 0],
  ]

  function project(K, point) {
    const proj = [
      K[0][0] * point[0] + K[0][1] * point[1] + K[0][2] * point[2] + K[0][3] * point[3],
      K[1][0] * point[0] + K[1][1] * point[1] + K[1][2] * point[2] + K[1][3] * point[3],
      K[2][0] * point[0] + K[2][1] * point[1] + K[2][2] * point[2] + K[2][3] * point[3],
    ]
    return [proj[0] / proj[2], proj[1] / proj[2]]
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = controls.backgroundColor
    ctx.fillRect(0, 0, W, H)

    const { start, end } = points[controls.stars]

    for (let i = 0; i < controls.stars; i++) {
      start[i][2] -= controls.speed
      end[i][2] -= controls.speed

      start[i] = rotatePoint(start[i], controls.rotation)
      end[i] = rotatePoint(end[i], controls.rotation)

      const start_rot = [
        R[0][0] * start[i][0] + R[0][1] * start[i][1] + R[0][2] * start[i][2] + R[0][3] * start[i][3],
        R[1][0] * start[i][0] + R[1][1] * start[i][1] + R[1][2] * start[i][2] + R[1][3] * start[i][3],
        R[2][0] * start[i][0] + R[2][1] * start[i][1] + R[2][2] * start[i][2] + R[2][3] * start[i][3],
        R[3][0] * start[i][0] + R[3][1] * start[i][1] + R[3][2] * start[i][2] + R[3][3] * start[i][3],
      ]

      const end_rot = [
        R[0][0] * end[i][0] + R[0][1] * end[i][1] + R[0][2] * end[i][2] + R[0][3] * end[i][3],
        R[1][0] * end[i][0] + R[1][1] * end[i][1] + R[1][2] * end[i][2] + R[1][3] * end[i][3],
        R[2][0] * end[i][0] + R[2][1] * end[i][1] + R[2][2] * end[i][2] + R[2][3] * end[i][3],
        R[3][0] * end[i][0] + R[3][1] * end[i][1] + R[3][2] * end[i][2] + R[3][3] * end[i][3],
      ]

      if (start_rot[2] <= 0) {
        const [s, e] = sampleLine()
        start[i] = s
        end[i] = e
        continue
      }

      const proj_start = project(K, start_rot)
      const proj_end = project(K, end_rot)

      ctx.strokeStyle = controls.color
      ctx.lineWidth = controls.width
      ctx.beginPath()
      ctx.moveTo(...proj_start)
      ctx.lineTo(...proj_end)
      ctx.stroke()
    }

    requestAnimationFrame(draw)
  }

  requestAnimationFrame(draw)
})
