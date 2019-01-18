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

    clear(context, 0, 0, 300, 300)

    expect(context.clearRect).toHaveBeenCalled();
  })
})
