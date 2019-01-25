const { curry } = require('ramda')

module.exports = curry((w, h, color, x, y, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
})
