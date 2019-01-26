const grow_snake_and_create_food = require('../../src/game/grow-snake-and-create-food')

describe("Grow snake and create food", () => {
  it("should grow the snake and regenerate food", () => {
    spyOn(Math, 'random').and.returnValue(0)

    expect(grow_snake_and_create_food({
      width: 300,
      height: 300,
      dx: 15,
      dy: 0,
      snake: [{x:150, y:150}],
      food: {x:150, y:150},
      speed: 100
    })).toEqual({
      width: 300,
      height: 300,
      dx: 15,
      dy: 0,
      snake: [{x:165, y:150}, {x:150, y:150}],
      food: {x:0, y:0},
      speed: 99
    })
  })
})
