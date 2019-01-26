const is_on_food = require('../../src/game/is-on-food')

describe("Is on food", () => {
  [
    {food: {x:0, y:0}, snake: [{x:10, y:0}], output: false},
  ].map(({food, snake, output}) => {
    it(`${JSON.stringify(food)} ${JSON.stringify(snake)} ${JSON.stringify(output)}`, () => {
      expect(is_on_food(food, snake)).toBe(output)
    })
  })
})
