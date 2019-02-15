'use strict'

const markCellUi = (cellID, playersMark) => {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

const notifyUser = (text) => $('.notifications').text(text)

module.exports = {
  markCellUi,
  notifyUser
}
