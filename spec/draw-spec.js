const dot = require('../src/dot')
const draw = require('../src/draw')

const { map, apply, flip } = require('ramda')

describe("Draw", () => {
  let canvas = null
  let context = null

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 300
    canvas.height = 300
    context = canvas.getContext('2d');
  })

  it("should draw a list of points", () => {
    spyOn(context, 'fillRect').and.callThrough();

    let black_dot = dot(300, 300, 'black');

    let points = [
      {x: 0, y:0},
      {x: 10, y:10},
    ]

    let base_points = draw(black_dot, points)

    map(flip(apply)([context]), base_points)

    expect(context.fillRect.calls.count()).toEqual(2);
    expect(context.fillRect).toHaveBeenCalledWith(0, 0, 300, 300)
    expect(context.fillRect).toHaveBeenCalledWith(10, 10, 300, 300)
  })
})
