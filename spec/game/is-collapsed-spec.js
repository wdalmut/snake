const is_collapsed = require('../../src/game/is-collapsed')

describe("Is collapsed", () => {
  [
    { input: [{x:0, y:0}], output: false },
    { input: [{x:30, y:30}], output: false },
    { input: [{x:0, y:0}, {x:0, y:0}], output: true },
    { input: [{x:0, y:0}, {x:10, y:0}, {x:10, y:10}, {x:0, y:10}], output: false },
    { input: [{x:0, y:0}, {x:10, y:0}, {x:10, y:10}, {x:0, y:10}, {x:0, y:0}], output: true },
  ].map(({input, output}) => {
    it(`with ${JSON.stringify(input)}`, () => {
      expect(is_collapsed(input)).toBe(output)
    })
  })
})
