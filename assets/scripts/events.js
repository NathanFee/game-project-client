'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')

// Test Game --------------------------------
const game = {
  cells: ['', '', '', '', '', '', '', '', ''],
  over: false,
  player_x: {
    id: 0,
    email: 'player_x@gmail.com',
    mark: 'X',
    moves: []
  },
  player_o: {
    id: 1,
    email: 'player_x@gmail.com',
    mark: 'O',
    moves: []
  },
  player_xTurn: true,
  getCurrentPlayer: function () {
    return this.player_xTurn ? this.player_x : this.player_o
  }
}
// Test Game --------------------------------

const winningCombinations = [
  ['2', '1', '0'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['8', '4', '0'],
  ['2', '4', '6'],
  ['6', '3', '0'],
  ['1', '4', '7'],
  ['2', '5', '8']]

const onNewGame = function () {
  api.createNewGame()
}

const onClickCell = function (event) {
  const cellID = event.target.id
  markCell(cellID, game)
}

const checkWinner = function (player) {
  let win = false
  // check to see if current player has won
  win = winningCombinations.some((combo) => combo.every(num => player.moves.includes(num)))
  // if there is a winner, end the game
  win ? game.over = true : game.over = false
  return win
}

const switchTurn = function (game) {
  if (game.player_xTurn) {
    game.player_xTurn = false
    ui.notifyUser(`Player ${game.player_o.mark} it's you turn`)
  } else {
    game.player_xTurn = true
    ui.notifyUser(`Player ${game.player_x.mark} it's you turn`)
  }
}

// if there are no empty spaces, the game is a draw, end game.
const checkDraw = (game) => !game.cells.includes('') && (game.over = true)

const markCell = function (cellID, game) {
  const player = game.getCurrentPlayer()
  // Check if the cell is empty & the game isn't over
  if (!game.cells[cellID] && !game.over) {
    // Fill the cell array with the players mark
    game.cells[cellID] = player.mark
    // Store the cell index in the players moves array
    player.moves.push(cellID)
    // Mark cell in ui with player mark
    ui.markCellUi(cellID, player.mark)
    // If player won, notify user
    checkWinner(player) && ui.notifyUser(`Game Over. ${player.mark} Wins!`)
    // If draw, notify user
    !game.over && checkDraw(game) && ui.notifyUser('The Game is a Draw!')
    // If the game is not over, switch turn
    !game.over && switchTurn(game)
  } else {
    // The selection was invalid, notify user
    !game.over && ui.notifyUser('Invalid Selection')
  }
}

module.exports = {
  getFormFields,
  onClickCell,
  onNewGame
}
