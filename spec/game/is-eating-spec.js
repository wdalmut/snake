const is_eating = require('../../src/game/is-eating')

describe("Is Eating", () => {
  [
    {
      state: {
        snake: [{x: 0, y:0}, {x: 15, y:0}],
        food: {x: 15, y: 15}
      },
      output: false
    },
    {
      state: {
        snake: [{x: 0, y:0}, {x: 15, y:0}, {x: 15, y: 15}],
        food: {x: 15, y: 15}
      },
      output: true
    }
  ].map(({state, output}) => {
    it("should say if is eating", () => {
      expect(is_eating(state)).toBe(output)
    })
  })
})
