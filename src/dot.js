const { curry } = require('ramda')

module.exports = curry((w, h, ctx, color, x, y) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
})
