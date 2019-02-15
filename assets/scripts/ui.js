'use strict'

const markCellUi = function (cellID, playersMark) {
  $('#' + cellID).html(`<h1>${playersMark}</h1>`)
}

module.exports = {
  markCellUi
}
