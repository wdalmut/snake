const { T, cond } = require('ramda')

const reset_game = require('./reset-game')

const is_eating = require('./is-eating')
const move_snake = require('./move-snake')
const is_eating_itself = require('./is-eating-itself')

const grow_snake_and_create_food = require('./grow-snake-and-create-food')

const otherwise = T
module.exports = cond([
  [is_eating_itself, reset_game],
  [is_eating, grow_snake_and_create_food],
  [otherwise, move_snake],
])
