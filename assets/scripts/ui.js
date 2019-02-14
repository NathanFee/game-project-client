'use strict'

const markCellUi = function (cellID, playersMark) {
  console.log('Marked cell')
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

module.exports = {
  markCellUi
}
