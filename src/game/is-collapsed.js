const { uniq, length } = require('ramda')

module.exports = (points) => {
  return length(uniq(points)) != length(points)
}
