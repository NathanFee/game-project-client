'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
  // A move was made, enable new game button
  $('#new-game-button').removeAttr('disabled')
}

const blink = function (target) {
  $(target).toggleClass('blink')
  setTimeout(() => {
    $(target).toggleClass('blink')
  }, 300)
}

const notifyUser = (text) => {
  $('.notifications').text(text)
  blink('.notifications')
}

const newGameSuccess = function (responseData) {
  // A new game was created, disable new game button
  $('#new-game-button').attr('disabled', 'disabled')
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

const closeStatsModal = function () {
  $('#userStatsModal').modal('toggle')
  // wait until modal fades before changing
  setTimeout(() => {
    $('#user-stats-viewer').html('Loading...')
  }, 1500)
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
  showUserStats,
  closeStatsModal
}
