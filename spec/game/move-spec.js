const move = require('../../src/game/move')

describe("Move", () => {
  [
    {width: 300, height:300, dx: 10, dy: 0, points: [{x:0, y:0}], output: [{x:10, y:0}]},
    {width: 300, height:300, dx: -10, dy: 0, points: [{x:0, y:0}], output: [{x:290, y:0}]},
    {width: 300, height:300, dx: 0, dy: 10, points: [{x:0, y:0}], output: [{x:0, y:10}]},
    {width: 300, height:300, dx: 0, dy: -10, points: [{x:0, y:0}], output: [{x:0, y:290}]},
    {width: 300, height:300, dx: -10, dy: -10, points: [{x:0, y:0}], output: [{x:290, y:290}]},
    {width: 300, height:300, dx: 10, dy: 10, points: [{x:0, y:0}], output: [{x:10, y:10}]},
    {width: 300, height:300, dx: 10, dy: 0, points: [{x:10, y:0}, {x:0, y:0}], output: [{x:20, y:0}, {x:10, y:0}]},
  ].map(({width, height, dx, dy, points, output}) => {
    it(`should move to ${dx},${dy} from ${JSON.stringify(points)}`, () => {
      expect(move(width, height, dx, dy, points)).toEqual(output)
    })
  })
})
