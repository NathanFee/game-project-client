'use strict'

const config = require('./config.js')
const store = require('./store.js')

const createNewGame = () => {
  console.log('I tried')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createNewGame
}
