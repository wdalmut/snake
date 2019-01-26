const is_eating_itself = require('../../src/game/is-eating-itself')

describe("Is eating itself", () => {
  [
    {state: {snake: [{x:0,y:0},{x:15,y:0},{x:15,y:15},{x:0,y:15},{x:0,y:0}]}, output: true},
    {state: {snake: [{x:0, y:0}]}, output: false},
  ].map(({state, output}) => {
    it("should check if is eating itself", () => {
      expect(is_eating_itself(state)).toBe(output)
    })
  })
})
