const { compose, prop } = require('ramda')

const is_collapsed = require('./is-collapsed')

module.exports = compose(is_collapsed, prop('snake'))

