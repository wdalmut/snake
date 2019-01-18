
const {
  converge, map, prop, partial, evolve,
  cond, T, compose, flip, modulo, equals,
  always, path, identity, mergeDeepLeft,
  tap, apply, props, multiply, not, lt,
  gt, and, assoc, pick, lens, over
} = require('ramda')

const {
  state,
  BLOCK_SIZE,
  WIDTH,
  HEIGHT,
} = require('./defaults')

const dot = require('./dot')
const grow = require('./grow')
const move = require('./move')
const clear = require('./clear')
const play_board = require('./play-board')
const is_on_food = require('./is-on-food')
const is_collapsed = require('./is-collapsed')
const random_position = require('./random-position')

const reset_game = always(state)

const random_position_x = partial(random_position, [WIDTH, BLOCK_SIZE])
const random_position_y = partial(random_position, [HEIGHT, BLOCK_SIZE])
const create_food = evolve({x: random_position_x, y: random_position_y})

const is_pressed = key => compose(equals(key), prop('direction'))
const is_not_going_up = compose(not, gt(0), prop('dy'))
const is_not_going_left = compose(not, gt(0), prop('dx'))
const is_not_going_down = compose(not, lt(0), prop('dy'))
const is_not_going_right = compose(not, lt(0), prop('dx'))

const is_eating_itself = compose(is_collapsed, prop('snake'))
const is_eating = compose(apply(is_on_food), props(['food', 'snake']))

const snake_lens = lens(identity, assoc('snake'))
const move_snake = over(snake_lens, compose(apply(move), props(['width', 'height', 'dx', 'dy', 'snake'])))
const grow_snake = over(snake_lens, compose(apply(grow), props(['width', 'height', 'dx', 'dy', 'snake'])))

const otherwise = T
const keep_going = identity
const is_going_down = converge(and, [is_pressed('ArrowDown'), is_not_going_up])
const is_going_up = converge(and, [is_pressed('ArrowUp'), is_not_going_down])
const is_going_left = converge(and, [is_pressed('ArrowLeft'), is_not_going_right])
const is_going_right = converge(and, [is_pressed('ArrowRight'), is_not_going_left])

const grow_snake_and_create_food = compose(evolve({food: create_food}), grow_snake)

const set_direction = cond([
  [is_going_down, mergeDeepLeft({dx: 0, dy: BLOCK_SIZE})],
  [is_going_up, mergeDeepLeft({dx: 0, dy: -BLOCK_SIZE})],
  [is_going_left, mergeDeepLeft({dx: -BLOCK_SIZE, dy: 0})],
  [is_going_right, mergeDeepLeft({dx: BLOCK_SIZE, dy: 0})],
  [otherwise, keep_going],
])

const game_step = cond([
  [is_eating_itself, reset_game],
  [is_eating, grow_snake_and_create_food],
  [T, move_snake],
])

const apply_state = compose(game_step, set_direction)

const canvas = play_board(WIDTH, HEIGHT)
const create_dot = dot(BLOCK_SIZE, BLOCK_SIZE, canvas.getContext('2d'))
const black_dot = create_dot('black')
const red_dot = create_dot('red')

const draw_black_dot = converge(black_dot, [prop('x'), prop('y')])
const draw_red_dot = converge(red_dot, [prop('x'), prop('y')])
const clear_all = compose(partial(clear, [canvas.getContext('2d'), 0, 0, WIDTH, HEIGHT]))

const draw_snake = compose(map(draw_black_dot), prop('snake'))
const draw_food = compose(draw_red_dot, prop('food'))

;(function(canvas, state) {

  function play() {
    state = apply_state(state)

    clear_all(state)
    draw_snake(state)
    draw_food(state)
  }

  setImmediate(play)
  let id = setInterval(play, state.speed)

  canvas.addEventListener("keydown", (event) => {
    state = assoc('direction', prop('key', event), state)
  });
})(canvas, reset_game())
