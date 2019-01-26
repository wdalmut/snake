const apply_state = require('../src/game')

describe("Snake step", () => {
  [
    {
      state: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 15, y: 15},
        snake: [{x: 150, y: 150}],
        speed: 100,
        picks: 0,
      },
      output: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 15, y: 15},
        snake: [{x: 165, y: 150}],
        speed: 100,
        picks: 0,
      }
    },
    {
      state: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 150, y: 150},
        snake: [{x: 150, y: 150}],
        speed: 100,
        picks: 0,
      },
      output: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 0, y: 0},
        snake: [{x: 165, y: 150}, {x: 150, y:150}],
        speed: 99,
        picks: 0,
      }
    },
    {
      state: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 0, y: 0},
        snake: [{x: 165, y: 150}, {x: 165, y:150} ],
        speed: 99,
        picks: 0,
      },
      output: {
        direction: null,
        width: 300, height: 300,
        dx: 15, dy: 0,
        food: {x: 30, y: 30},
        snake: [{x: 150, y:150}],
        speed: 120,
        picks: 0,
      },
    }
  ].map(({state, output}) => {
    it("should take a step", () => {
      spyOn(Math, 'random').and.returnValue(0)

      expect(apply_state(state)).toEqual(output)
    })
  })
})
