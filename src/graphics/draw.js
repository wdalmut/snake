const { map, curry, always, compose, converge, prop } = require('ramda')

module.exports = curry((dot, points) => {
  return map(converge(dot, [prop('x'), prop('y')]))(points)
})
