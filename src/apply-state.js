const { compose } = require('ramda')

const snake_step = require('./snake-step')
const set_direction = require('./set-direction')

module.exports = compose(snake_step, set_direction)
