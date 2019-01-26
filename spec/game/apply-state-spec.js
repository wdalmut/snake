const apply_state = require('../../src/game/apply-state')

describe("Snake step", () => {
  [
    {
      state: {
        direction: 'ArrowDown',
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 30, y: 30},
        snake: [{x: 165, y: 150}, {x: 150, y:150} ],
        speed: 99,
      },
      output: {
        direction: 'ArrowDown',
        width: 300, height: 300,
        dx: 0, dy: 15,
        food: {x: 30, y: 30},
        snake: [{x: 165, y: 165}, {x: 165, y:150} ],
        speed: 99,
      },
    },
    {
      state: {
        direction: 'ArrowDown',
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 165, y: 150},
        snake: [{x: 165, y: 150}, {x: 150, y:150} ],
        speed: 99,
      },
      output: {
        direction: 'ArrowDown',
        width: 300, height: 300,
        dx: 0, dy: 15,
        food: {x: 0, y: 0},
        snake: [{x:165, y:165}, {x: 165, y:150}, {x:150, y:150}],
        speed: 98,
      },
    }
  ].map(({state, output}) => {
    it("should take a step", () => {
      spyOn(Math, 'random').and.returnValue(0)

      expect(apply_state(state)).toEqual(output)
    })
  })
})

