'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
  // A move was made, enable new game button
  $('#new-game-button').removeClass('disabled')
}

const notifyUser = (text) => $('.notifications').text(text)

const newGameSuccess = function (responseData) {
  // A new game was created, disable new game button
  $('#new-game-button').addClass('disabled')
  // Store the new game
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
  console.log('Failed to create new game!')
}

const updateGameSuccess = function (responseData) {
  console.log('Game updated!')
}

const updateGamesFailure = function () {
  console.log('Failed to update game!')
}

const getGamesSuccess = function (responseData) {
  console.log('GOT GAMES!')
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
  getGameFailure,
  showUserStats
}
