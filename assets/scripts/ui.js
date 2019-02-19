'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

const notifyUser = (text) => $('.notifications').text(text)

const newGameSuccess = function (responseData) {
  console.log('New game created!')
  store.user.game = responseData.game
  $('#user-message').html('')
  resetBoard()
  showGameBoard()
}

const resetBoard = function () {
  $('#game-board .cell').empty()
  $('.notifications').html('X goes first')
}

const showGameBoard = function () {
  $('#game-board').removeClass('hidden')
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
