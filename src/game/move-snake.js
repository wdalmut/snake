
const move = require('./move')
const { lens, over, apply, compose, props, assoc, identity } = require('ramda')

const snake_lens = lens(identity, assoc('snake'))

module.exports = over(snake_lens, compose(apply(move), props(['width', 'height', 'dx', 'dy', 'snake'])))

