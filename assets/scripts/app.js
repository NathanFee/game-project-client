'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const events = require('./events.js')

  $(() => {
    $('#0').on('click', events.onClickTile)
    $('#1').on('click', events.onClickTile)
    $('#2').on('click', events.onClickTile)
    $('#3').on('click', events.onClickTile)
    $('#4').on('click', events.onClickTile)
    $('#5').on('click', events.onClickTile)
    $('#6').on('click', events.onClickTile)
    $('#7').on('click', events.onClickTile)
    $('#8').on('click', events.onClickTile)
  })
})
