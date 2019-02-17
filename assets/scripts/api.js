'use strict'

const config = require('./config.js')
const store = require('./store.js')

const createNewGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (index, mark, gameStatus) {
  console.log('updating game...')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': mark
        },
        'over': gameStatus
      }
    }
  })
}

module.exports = {
  createNewGame,
  updateGame
}
