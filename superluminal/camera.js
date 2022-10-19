export function Rx(angle) {
  return [
    [1, 0, 0],
    [0, Math.cos(angle), Math.sin(angle)],
    [0, -Math.sin(angle), Math.cos(angle)],
  ]
}

export function Ry(angle) {
  return [
    [Math.cos(angle), 0, -Math.sin(angle)],
    [0, 1, 0],
    [Math.sin(angle), 0, Math.cos(angle)],
  ]
}

export function Rz(angle) {
  return [
    [Math.cos(angle), Math.sin(angle), 0],
    [-Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1],
  ]
}

export function multiply(A, B) {
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

export function multiplyWithPoint(A, point) {
  const m = A.length
  const p = point.length
  const out = Array(p).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
      out[i] += A[i][j] * point[j]
    }
  }

  return out
}

export function project(K, point) {
  const proj = multiplyWithPoint(K, point)
  return [proj[0] / proj[2], proj[1] / proj[2]]
}

export function rotatePoint(point, angle) {
  // Rotate around origin in the z-axis
  return [
    Math.cos(angle) * point[0] - Math.sin(angle) * point[1],
    Math.sin(angle) * point[0] + Math.cos(angle) * point[1],
    point[2],
    point[3],
  ]
}
