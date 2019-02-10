const { WIDTH, HEIGHT } = require('../defaults')

module.exports = () => {
  let canvas = document.createElement('canvas');
  canvas.tabIndex = 1000;
  canvas.width = WIDTH
  canvas.height = HEIGHT
  canvas.style = 'border: 2px solid #000;'

  document.getElementsByTagName('body').item(0).appendChild(canvas)

  canvas.focus();

  return canvas
}
