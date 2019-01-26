
const grow = require('./grow')
const { lens, identity, assoc, over, compose, apply, props } = require('ramda')

const snake_lens = lens(identity, assoc('snake'))
module.exports = over(snake_lens, compose(apply(grow), props(['width', 'height', 'dx', 'dy', 'snake'])))
