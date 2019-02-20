'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')

const winningCombinations = [
  [2, 1, 0],
  [3, 4, 5],
  [6, 7, 8],
  [8, 4, 0],
  [2, 4, 6],
  [6, 3, 0],
  [1, 4, 7],
  [2, 5, 8]]

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

const onUserStats = function () {
  api.getGames()
    .then(ui.getGamesSuccess)
    .then(() => calcUserStats())
    .catch(ui.getGamesfailure)
}

const calcUserStats = function () {
  const games = store.user.games
  // check if game was a win/lose
  const xWins = games.filter(game => checkWin(game, 'X'))
  const oWins = games.filter(game => checkWin(game, 'O'))
  const draws = games.filter(game => checkDraw(game))

  ui.showUserStats(`Wins:${xWins.length}  Loses:${oWins.length}  Draws:${draws.length}`)
}

const getCurrentPlayersMark = function (game) {
  const xs = game.cells.filter(cell => cell === 'X')
  const os = game.cells.filter(cell => cell === 'O')

  return xs.length > os.length ? 'O' : 'X'
}

const getPlayersMoves = function (game, playersMark) {
  const moves = []
  for (let i = 0; i < game.cells.length; i++) {
    game.cells[i] === playersMark && moves.push(i)
  }

  return moves
}

const checkWin = function (game, playersMark) {
  let win = false
  // get all current players moves
  const moves = getPlayersMoves(game, playersMark)
  console.log(moves)
  // check to see if current player has won
  win = winningCombinations.some((combo) => combo.every(num => moves.includes(num)))
  // if there is a winner, end the game
  win ? game.over = true : game.over = false
  return win
}

// if there are no empty spaces, the game is a draw, end game.
const checkDraw = (game) => !game.cells.includes('') && (game.over = true)

const markCell = function (cellID, game) {
  const playersMark = getCurrentPlayersMark(game)
  const opponentsMark = playersMark === 'X' ? 'O' : 'X'
  // Check if the cell is empty & the game isn't over
  if (!game.cells[cellID] && !game.over) {
    // Fill the cell array with the players mark
    game.cells[cellID] = playersMark
    // Mark cell in ui with player mark
    ui.markCellUi(cellID, playersMark)
    // If player won, notify user
    checkWin(game, playersMark) && ui.notifyUser(`Game Over. ${playersMark} Wins! Please start a new game.`)
    // If draw, notify user
    !game.over && checkDraw(game) && ui.notifyUser('The game is a draw!')
    // Let the api know whats going on
    onUpdateGame(cellID, playersMark, game.over)
    !game.over && ui.notifyUser(`${opponentsMark}'s Turn`)
  } else {
    // The selection was invalid, notify user
    !game.over && ui.notifyUser('Invalid selection')
  }
}

module.exports = {
  getFormFields,
  onClickCell,
  onUpdateGame,
  onNewGame,
  onUserStats
}
