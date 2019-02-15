'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').html('Sign-up Successful!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').html('Error on Sign-up!')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').html('Sign-in Successful!')
  $('form').trigger('reset')
  // save the Token
  store.user = responseData.user
}

const signInFailure = () => {
  $('#user-message').html('Error on Sign-in!')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').html('Password Change Successful!')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').html('Error Changing Password!')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').html('Successfully Signed-Out!')
  $('form').trigger('reset')
  store.user = null
  console.log(store)
}

const signOutFailure = () => {
  $('#user-message').html('Error Signing Out!')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-message').html('Error, something went wrong.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  failure
}
