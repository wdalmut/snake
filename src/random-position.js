const {
  compose, multiply, flip, modulo
} = require('ramda')

const get_valid_number = (size) => compose(multiply(size), Math.floor, multiply(1e6), Math.random)()

module.exports = (width, size) => get_valid_number(size) % width
