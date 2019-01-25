const clear = require('../src/clear')

describe("Clear", () => {
  let canvas = null
  let context = null

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 300
    canvas.height = 300
    context = canvas.getContext('2d');
  })

  it("should call the clearRect method", () => {
    spyOn(context, 'clearRect').and.callThrough();

    clear(0, 0, 300, 300, context)

    expect(context.clearRect).toHaveBeenCalled();
  })
})
