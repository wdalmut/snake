const { curry } = require('ramda')

module.exports = curry((xs, ys, xe, ye, ctx) => {
  return ctx.clearRect(xs, ys, xe, ye);
})
