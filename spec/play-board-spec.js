const play_board = require('../src/play-board')

describe("PlayBoard", () => {
  it("should append the canvas", () => {
    let created = play_board(300, 300)

    expect(created).toBeDefined()
    expect(created).not.toBeNull()

    let canvas = document.getElementsByTagName('canvas').item(0)

    expect(canvas).toBeDefined();
    expect(canvas).not.toBeNull();
  })
})
