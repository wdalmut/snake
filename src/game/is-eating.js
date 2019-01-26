const { compose, apply, props } = require('ramda')
const is_on_food = require('./is-on-food')

module.exports = compose(apply(is_on_food), props(['food', 'snake']))
