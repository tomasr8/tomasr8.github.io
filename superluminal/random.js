function randNormal() {
  // Box-Muller transform
  const u = 1 - Math.random()
  const v = Math.random()
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

export function randomStar(spread, length) {
  const x = randNormal() * spread * 2 - spread
  const y = randNormal() * spread * 2 - spread
  const z = randNormal() * 100 + 300
  return [
    [x, y, z, 1],
    [x, y, z + length, 1],
  ]
}

export function sampleStars(n, spread, length) {
  const start = []
  const end = []
  for (let i = 0; i < n; i++) {
    const [s, e] = randomStar(spread, length)
    start.push(s)
    end.push(e)
  }
  return { start, end }
}
