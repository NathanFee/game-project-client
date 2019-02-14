'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onClickTile = function (event) {
  const tileID = event.target.id
  ui.markTile(tileID)
}

const checkEmpty = function (selection, game) {

}

module.exports = {
  getFormFields,
  onClickTile,
  checkEmpty
}
