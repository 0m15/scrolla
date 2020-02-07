export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c
export const lerp = (x0, x1, t) => (1 - t) * x0 + t * x1
export const smoothstep = (a, b, n) => {
  if (a === b) {
    return a
  }
  if (a === 0 && b === 0) {
    return 0
  }
  let t = (n - a) / (b - a)
  return t * t * (3.0 - 2.0 * t)
}

export const cubeBezier = (p0, p1, p2, p3, t) => {
  let r = 1 - t
  let f0 = r * r * r
  let f1 = r * r * t * 3
  let f2 = r * t * t * 3
  let f3 = t * t * t
  return f0 * p0 + f1 * p1 + f2 * p2 + f3 * p3
}
export const clamp = (x, a, b) => {
  return Math.min(Math.max(x, a), b)
}
export const sat = x => {
  return MathUtils.clamp(x, 0, 1)
}
