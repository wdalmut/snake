
const { compose, evolve, dec } = require('ramda')

const grow_snake = require('./grow-snake')
const create_food = require('./create-food')

module.exports = compose(evolve({speed: dec, food: create_food}), grow_snake)

