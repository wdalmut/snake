const move_snake = require('../../src/game/move-snake')

describe("Move Snake", () => {
  [
    {
      state: { width: 300, height: 300, dx: 0, dy: 15, snake: [{x: 0, y: 0}] },
      output: { width: 300, height: 300, dx: 0, dy: 15, snake: [{x: 0, y: 15}] },
    },
    {
      state: { width: 300, height: 300, dx: 15, dy: 0, snake: [{x: 0, y: 0}] },
      output: { width: 300, height: 300, dx: 15, dy: 0, snake: [{x: 15, y: 0}] },
    },
  ].map(({state, output}) => {
    it("should move the snake", () => {
      expect(move_snake(state)).toEqual(output)
    })
  })
})

