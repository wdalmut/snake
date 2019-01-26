const dot = require('../../src/graphics/dot')

describe("Dot", () => {
  let canvas = null
  let context = null

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 300
    canvas.height = 300
    context = canvas.getContext('2d');
  })

  it("should draw a dot", () => {
    spyOn(context, 'fillRect').and.callThrough();

    dot(15, 15, 'black', 100, 100, context)

    expect(context.fillRect).toHaveBeenCalled();
  })
})
