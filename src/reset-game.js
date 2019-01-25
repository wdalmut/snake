
const { always } = require('ramda')
const { state } = require('./defaults')

module.exports = always(state)
