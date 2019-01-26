const set_direction = require('../../src/game/set-direction')

describe("set direction", () => {
  [
    { state: {direction: 'ArrowDown', dx: 15, dy: 0}, output: {direction: 'ArrowDown', dx: 0, dy: 15}, },
    { state: {direction: 'ArrowDown', dx: 0, dy: 15}, output: {direction: 'ArrowDown', dx: 0, dy: 15}, },
    { state: {direction: 'ArrowUp', dx: 15, dy: 0}, output: {direction: 'ArrowUp', dx: 0, dy: -15}, },
    { state: {direction: 'ArrowUp', dx: 0, dy: -15}, output: {direction: 'ArrowUp', dx: 0, dy: -15}, },
    { state: {direction: 'ArrowLeft', dx: 0, dy: 15}, output: {direction: 'ArrowLeft', dx: -15, dy: 0}, },
    { state: {direction: 'ArrowLeft', dx: -15, dy: 0}, output: {direction: 'ArrowLeft', dx: -15, dy: 0}, },
    { state: {direction: 'ArrowRight', dx: 0, dy: 15}, output: {direction: 'ArrowRight', dx: 15, dy: 0}, },
    { state: {direction: 'ArrowRight', dx: 15, dy: 0}, output: {direction: 'ArrowRight', dx: 15, dy: 0}, },
    // Invalid movement requests
    { state: {direction: 'ArrowUp', dx: 0, dy: 15}, output: {direction: 'ArrowUp', dx: 0, dy: 15}, },
    { state: {direction: 'ArrowDown', dx: 0, dy: -15}, output: {direction: 'ArrowDown', dx: 0, dy: -15}, },
    { state: {direction: 'ArrowLeft', dx: 15, dy: 0}, output: {direction: 'ArrowLeft', dx: 15, dy: 0}, },
    { state: {direction: 'ArrowRight', dx: -15, dy: 0}, output: {direction: 'ArrowRight', dx: -15, dy: 0}, },
  ].map(({state, output}) => {
    it ("should apply the direction", () => {
      expect(set_direction(state)).toEqual(output)
    })
  })
})
