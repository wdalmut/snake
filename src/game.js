const {
  T, cond, compose,
} = require('ramda')

const { BLOCK_SIZE } = require('./defaults')

const reset_game = require('./reset-game')

const move_snake = require('./move-snake')

const is_eating_itself = require('./is-eating-itself')
const is_eating = require('./is-eating')

const grow_snake_and_create_food = require('./grow-snake-and-create-food')

const set_direction = require('./set-direction')

const otherwise = T
const game_step = cond([
  [is_eating_itself, reset_game],
  [is_eating, grow_snake_and_create_food],
  [otherwise, move_snake],
])

module.exports = compose(game_step, set_direction)
