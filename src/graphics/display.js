const { converge, map, prop, compose, flip, apply, } = require('ramda')

const {
  state,
  BLOCK_SIZE,
  WIDTH,
  HEIGHT,
} = require('./../defaults')

const dot = require('./dot')

const clear = require('./clear')

const create_dot = dot(BLOCK_SIZE, BLOCK_SIZE)
const black_dot = create_dot('black')
const red_dot = create_dot('red')

const draw_black_dot = converge(black_dot, [prop('x'), prop('y')])
const draw_red_dot = converge(red_dot, [prop('x'), prop('y')])
const clear_rect = clear(0, 0, WIDTH, HEIGHT)

const draw_snake = compose(map(draw_black_dot), prop('snake'))
const draw_food = compose(draw_red_dot, prop('food'))

const apply_with = flip(apply)

module.exports = {
  clear_rect,
  apply_with,
  draw_food,
  draw_snake,
}
