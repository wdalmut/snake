const BLOCK_SIZE = 15
const INITIAL_SNAKE_SPEED = 120
const INITIAL_SNAKE = [{x: 150, y: 150}]
const INITIAL_FOOD = {x: 30, y: 30}
const WIDTH = 300
const HEIGHT = 300

const state = {
  direction: null,
  width: WIDTH,
  height: HEIGHT,
  dx: BLOCK_SIZE,
  dy: 0,
  snake: INITIAL_SNAKE,
  food: INITIAL_FOOD,
  speed: INITIAL_SNAKE_SPEED,
  picks: 0
}

module.exports = {
  state,
  BLOCK_SIZE,
  WIDTH,
  HEIGHT,
}
