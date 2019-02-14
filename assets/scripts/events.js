'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')

// Test Game --------------------------------
const game = {
  cells: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  over: false,
  player_x: {
    id: 0,
    email: 'player_x@gmail.com',
    turn: true
  },
  player_o: null
}
// Test Game --------------------------------

const onClickCell = function (event) {
  const cellID = event.target.id
  markCell(cellID, game)
}

const checkWinner = function (game) {
  console.log('Checking for Winner')
}

// NEED TO CHECK WHOS TURN
const markCell = function (cellID, game) {
  // Check if the cell is empty
  if (game.cells[cellID] === ' ') {
    console.log('It was empty')

    // Fill the cell array with the player mark
    const playersMark = game.player_x.turn ? 'X' : 'O'
    game.cells[cellID] = playersMark

    // Mark cell in ui with player mark
    ui.markCellUi(cellID, playersMark)

    // Check for a winner
    checkWinner(game)
    // Switch turns
    game.player_x.turn = !(game.player_x.turn)
  }
}

module.exports = {
  getFormFields,
  onClickCell
}
