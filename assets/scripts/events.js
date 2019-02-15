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
  player_o: null,
  xMoves: [],
  oMoves: []
}

const winningCombinations = [
['2', '1', '0'],
['3', '4', '5'],
['6', '7', '8'],
['8', '4', '0'],
['2', '4', '6'],
['6', '3', '0'],
['1', '4', '7'],
['2', '5', '8']]
// Test Game --------------------------------

const onClickCell = function (event) {
  const cellID = event.target.id
  markCell(cellID, game)
}

const checkWinner = function (game, turn) {
  let win = false
  if (game.player_x.turn) {
    // check to see if x wins
    win = winningCombinations.some((combo) => combo.every(num => game.xMoves.includes(num)))
  } else {
    // check to see if o wins
    win = winningCombinations.some((combo) => combo.every(num => game.oMoves.includes(num)))
  }
  return win
}

const markCell = function (cellID, game) {
  // Check if the cell is empty
  if (game.cells[cellID] === ' ') {
    // Get the mark of the current player
    const playersMark = game.player_x.turn ? 'X' : 'O'
    // Fill the cell array with the players mark
    game.cells[cellID] = playersMark
    console.log(game.cells)
    // Store the cell index in the players moves array
    game.player_x.turn ? game.xMoves.push(cellID) : game.oMoves.push(cellID)
    // Mark cell in ui with player mark
    ui.markCellUi(cellID, playersMark)
    // Check for a winner
    checkWinner(game) ? console.log('We have a Winner') : console.log('No Winner Yet')
    // Switch turns
    game.player_x.turn = !(game.player_x.turn)
  }
}

module.exports = {
  getFormFields,
  onClickCell
}
