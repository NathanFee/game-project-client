'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')

const winningCombinations = [
  ['2', '1', '0'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['8', '4', '0'],
  ['2', '4', '6'],
  ['6', '3', '0'],
  ['1', '4', '7'],
  ['2', '5', '8']]

const onNewGame = function (event) {
  // prevent refresh after button click
  event.preventDefault()

  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClickCell = function (event) {
  const cellID = event.target.id
  markCell(cellID, store.user.game)
}

const onUpdateGame = function (cellID, mark, gameStatus) {
  api.updateGame(cellID, mark, gameStatus)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetGames = function () {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesfailure)
}

const checkWinner = function (player, game) {
  let win = false
  // check to see if current player has won
  win = winningCombinations.some((combo) => combo.every(num => player.moves.includes(num)))
  // if there is a winner, end the game
  win ? game.over = true : game.over = false
  return win
}

const switchTurn = function (game) {
  if (game.player_xTurn) {
    // it was players_x'x turn so now its not
    game.player_xTurn = false
    // notify player_o that its thier turn
    ui.notifyUser(`Player ${game.player_o.mark} it's you turn`)
  } else {
    // it was player_o's turn now its player_x's turn
    game.player_xTurn = true
    // notify player_x that its thier turn
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
    checkWinner(player, game) && ui.notifyUser(`Game Over. ${player.mark} Wins!`)
    // If draw, notify user
    !game.over && checkDraw(game) && ui.notifyUser('The Game is a Draw!')
    // Let the api know whats going on
    onUpdateGame(cellID, player.mark, game.over)
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
  onUpdateGame,
  onNewGame,
  onGetGames
}
