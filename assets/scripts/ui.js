'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

const notifyUser = (text) => $('.notifications').text(text)

const newGameSuccess = function (responseData) {
  console.log('New game created!')
  store.user.game = responseData.game
  // initialize game
  const game = store.user.game
  game.player_x.moves = []
  game.player_x.mark = 'X'
  game.player_o = {}
  game.player_o.moves = []
  game.player_o.mark = 'O'
  game.player_xTurn = true
  game.getCurrentPlayer = function () {
    return this.player_xTurn ? this.player_x : this.player_o
  }
}

const newGameFailure = function () {
  console.log('Failed to create new game!')
}

const updateGameSuccess = function (responseData) {
  console.log('Game updated!')
}

const updateGamesFailure = function () {
  console.log('Failed to update game!')
}

const getGamesSuccess = function (responseData) {
  console.log('Got Games!')
  store.user.games = responseData.games
}

const getGameFailure = function () {
  console.log('Failed to get games!')
}

module.exports = {
  markCellUi,
  notifyUser,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGamesFailure,
  getGamesSuccess,
  getGameFailure
}
