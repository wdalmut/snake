;(function() {
  const { assoc, prop }   = require('ramda')
  const create_play_board = require('./graphics/play-board')
  const draw              = require('./graphics/display')
  const reset_game        = require('./game/reset-game')
  const update_state       = require('./game/apply-state')

  const canvas         = create_play_board()
  const draw_on_canvas = draw(canvas.getContext('2d'))

  let state = reset_game()

  function play() {
    state = update_state(state)

    draw_on_canvas(state)

    setTimeout(play, state.speed)
  }

  setImmediate(play)

  canvas.addEventListener("keydown", (event) => {
    state = assoc('direction', prop('key', event), state)
  });
})()

