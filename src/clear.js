const { curry } = require('ramda')

module.exports = curry((ctx, xs, ys, xe, ye) => {
  return ctx.clearRect(xs, ys, xe, ye);
})
