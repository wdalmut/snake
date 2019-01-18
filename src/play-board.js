
module.exports = (width, height) => {
  let canvas = document.createElement('canvas');
  canvas.tabIndex = 1000;
  canvas.width = width
  canvas.height = height
  canvas.style = 'border: 2px solid #000;'
  let context = canvas.getContext('2d');

  document.getElementsByTagName('body').item(0).appendChild(canvas)

  canvas.focus();

  return canvas
}
