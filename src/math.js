export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c
export const lerp = (x0, x1, t) => (1 - t) * x0 + t * x1