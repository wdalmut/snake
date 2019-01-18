const grow = require('./grow')
const { curry, evolve, add, head, prepend, slice, compose, } = require('ramda')

module.exports = curry((width, height, dx, dy, points) => {
  return compose(slice(0, -1), grow(width, height, dx, dy))(points)
})
