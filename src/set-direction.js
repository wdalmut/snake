const {
  T, not, gt, lt, prop, compose, equals, cond, identity,
  converge, and, mergeDeepLeft,
} = require('ramda')

const { BLOCK_SIZE } = require('./defaults')
const is_pressed = key => compose(equals(key), prop('direction'))

const is_not_going_up = compose(not, gt(0), prop('dy'))
const is_not_going_left = compose(not, gt(0), prop('dx'))
const is_not_going_down = compose(not, lt(0), prop('dy'))
const is_not_going_right = compose(not, lt(0), prop('dx'))

const otherwise = T
const keep_going = identity

const is_going_down = converge(and, [is_pressed('ArrowDown'), is_not_going_up])
const is_going_up = converge(and, [is_pressed('ArrowUp'), is_not_going_down])
const is_going_left = converge(and, [is_pressed('ArrowLeft'), is_not_going_right])
const is_going_right = converge(and, [is_pressed('ArrowRight'), is_not_going_left])

module.exports = cond([
  [is_going_down, mergeDeepLeft({dx: 0, dy: BLOCK_SIZE})],
  [is_going_up, mergeDeepLeft({dx: 0, dy: -BLOCK_SIZE})],
  [is_going_left, mergeDeepLeft({dx: -BLOCK_SIZE, dy: 0})],
  [is_going_right, mergeDeepLeft({dx: BLOCK_SIZE, dy: 0})],
  [otherwise, keep_going],
])

