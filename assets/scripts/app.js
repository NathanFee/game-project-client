'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const events = require('./events.js')

  $(() => {
    $('#0').on('click', events.onClickCell)
    $('#1').on('click', events.onClickCell)
    $('#2').on('click', events.onClickCell)
    $('#3').on('click', events.onClickCell)
    $('#4').on('click', events.onClickCell)
    $('#5').on('click', events.onClickCell)
    $('#6').on('click', events.onClickCell)
    $('#7').on('click', events.onClickCell)
    $('#8').on('click', events.onClickCell)
  })
})
