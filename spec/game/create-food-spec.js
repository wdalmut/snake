const create_food = require('./../../src/game/create-food')

describe("Create Food", () => {
  it("should create food", () => {
    spyOn(Math, 'random').and.returnValue(0)

    expect(create_food({x:1, y:1})).toEqual({x:0, y:0})
  })
})
