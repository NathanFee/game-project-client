'use strict'

const markTile = function (tileID) {
  console.log('Marked Tile')
  $('#' + tileID).html('<h1>X</h1>')
}

module.exports = {
  markTile
}
