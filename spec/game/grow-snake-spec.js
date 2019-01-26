const grow_snake = require('../../src/game/grow-snake')

describe("Grow Snake", () => {
  [
    {
      state: { width: 300, height: 300, dx: 0, dy: 15, snake: [{x: 0, y: 0}] },
      output: { width: 300, height: 300, dx: 0, dy: 15, snake: [{x: 0, y: 15}, {x:0, y:0}] },
    },
    {
      state: { width: 300, height: 300, dx: 15, dy: 0, snake: [{x: 0, y: 0}] },
      output: { width: 300, height: 300, dx: 15, dy: 0, snake: [{x: 15, y: 0}, {x:0, y:0}] },
    },
  ].map(({state, output}) => {
    it("should grow the snake", () => {
      expect(grow_snake(state)).toEqual(output)
    })
  })
})


