const { curry, evolve, add, head, prepend, slice, compose, flip, modulo } = require('ramda')

const modulo_with = flip(modulo)

module.exports = curry((width, height, dx, dy, points) => {
  let first = evolve({
    x: compose(modulo_with(width), add(width), add(dx)),
    y: compose(modulo_with(height), add(height), add(dy)),
  }, head(points))

  return prepend(first, points)
})

