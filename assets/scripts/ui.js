'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
  // A move was made, enable new game button
  $('#new-game-button').removeClass('disabled')
}

const notifyUser = (text) => $('.notifications').text(text)

const newGameSuccess = function (responseData) {
<<<<<<< HEAD
=======
  // A new game was created, disable new game button
  $('#new-game-button').addClass('disabled')
  // Store the new game
>>>>>>> other
  store.user.game = responseData.game
  $('#user-message').html('')
  $('.notifications-window').removeClass('hidden')
  resetBoard()
  showGameBoard()
}

const resetBoard = function () {
  $('#game-board .cell').empty()
  $('.notifications').html('X goes first')
}

const showGameBoard = function () {
  $('.game-area').removeClass('hidden')
  $('#game-board').removeClass('hidden')
}

const showUserStats = function (userStats) {
  $('#user-stats-viewer').html(userStats)
}

const newGameFailure = function () {
  $('#user-message').html('Error failed to create new game!')
}

const updateGameSuccess = function (responseData) {
  // This function is here for testing purposes only.
  // No user message is needed as game will display success.
}

const updateGamesFailure = function () {
  $('#user-message').html('Error failed to update game. Try Again.')
}

const getGamesSuccess = function (responseData) {
  store.user.games = responseData.games
}

const getGamesFailure = function () {
  $('#user-message').html('Error failed to get games!')
}

module.exports = {
  markCellUi,
  notifyUser,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGamesFailure,
  getGamesSuccess,
  getGamesFailure,
  showUserStats
}
