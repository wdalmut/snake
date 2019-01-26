const random_position = require('../../src/game/random-position')

describe("Random position", () => {
  it("should reply with a random position", () => {
    let random = random_position(300, 10)

    expect(random).toMatch(/\d{1,}/)
    expect(random).not.toBeLessThan(0)
    expect(random).not.toBeGreaterThan(300)
  })
})
