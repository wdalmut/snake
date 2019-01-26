const { partial, evolve } = require('ramda')
const random_position = require('./random-position')
const { WIDTH, HEIGHT, BLOCK_SIZE, } = require('./defaults')

const random_position_x = partial(random_position, [WIDTH, BLOCK_SIZE])
const random_position_y = partial(random_position, [HEIGHT, BLOCK_SIZE])

module.exports = evolve({x: random_position_x, y: random_position_y})

