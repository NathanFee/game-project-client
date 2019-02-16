'use strict'

const store = require('./store.js')

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

const notifyUser = (text) => $('.notifications').text(text)

const newGameSuccess = function (responseData) {
  console.log('New game created!')
  store.user.game = responseData.game
}

const newGameFailure = function () {
  console.log('Failed to create new game!')
}

// const getGameSuccess = function (responseData) {
//   console.log('Game retrieved!')
//   store.user.game = responseData.game
// }
//
// const getGameFailure = function () {
//   console.log('Failed to get game!')
// }

module.exports = {
  markCellUi,
  notifyUser,
  newGameSuccess,
  newGameFailure
  // getGameSuccess,
  // getGameFailure
}
