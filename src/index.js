;(function() {

  const { map, assoc, prop, partial } = require('ramda')

  const {WIDTH, HEIGHT} = require('./defaults')

  const play_board = require('./graphics/play-board')
  const { clear_rect, apply_with, draw_snake, draw_food } = require('./graphics/display')

  const apply_state = require('./apply-state')
  const reset_game = require('./reset-game')


  const canvas = play_board(WIDTH, HEIGHT)

  const clear_all = partial(clear_rect, [canvas.getContext('2d')]);
  const design_on_canvas = apply_with([canvas.getContext('2d')])
  const design_list_on_canvas = map(design_on_canvas)

  let state = reset_game()

  function play() {
    state = apply_state(state)

    clear_all()

    design_list_on_canvas(draw_snake(state))
    design_on_canvas(draw_food(state))

    setTimeout(play, state.speed)
  }

  setImmediate(play)

  canvas.addEventListener("keydown", (event) => {
    state = assoc('direction', prop('key', event), state)
  });
})()

