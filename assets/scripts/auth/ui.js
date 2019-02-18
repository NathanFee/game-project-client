'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').html('Sign-up successful, please sign in.')
  $('form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  removeMessage()
  showSignInForm()
}

const signUpFailure = () => {
  $('#user-message').html('Error on Sign-up!')
  $('form').trigger('reset')
  removeMessage()
}

const signInSuccess = (responseData) => {
  $('#user-message').html('Sign-in Successful!')
  $('form').trigger('reset')
  // save the Token
  store.user = responseData.user
  $('form').addClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('.swap-form-display').addClass('hidden')
  $('#sign-out-form').removeClass('hidden')
  removeMessage()
}

const signInFailure = () => {
  $('#user-message').html('Error on Sign-in!')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordSuccess = () => {
  $('#user-message').html('Password Change Successful!')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordFailure = () => {
  $('#user-message').html('Error Changing Password!')
  $('form').trigger('reset')
  removeMessage()
}

const signOutSuccess = () => {
  $('#user-message').html('Successfully Signed-Out!')
  $('form').trigger('reset')
  $('#game-board').addClass('hidden')
  $('#new-game-button').addClass('hidden')
  $('#sign-out-form').addClass('hidden')
  $('.swap-form-display').removeClass('hidden')
  store.user = null
  showSignUpForm()
  removeMessage()
}

const signOutFailure = () => {
  $('#user-message').html('Error Signing Out!')
  $('form').trigger('reset')
  removeMessage()
}

const showSignInForm = function () {
  $('.sign-up-display').addClass('hidden')
  $('.sign-in-display').removeClass('hidden')
  $('.sign-in-button').addClass('hidden')
  $('.sign-up-button').removeClass('hidden')
  $('.swap-form-message').html('Need an account?')
}

const showSignUpForm = function () {
  $('.sign-in-display').addClass('hidden')
  $('.sign-up-display').removeClass('hidden')
  $('.sign-up-button').addClass('hidden')
  $('.sign-in-button').removeClass('hidden')
  $('.swap-form-message').html('Already have an account?')
}

const removeMessage = function () {
  setTimeout(() => {
    $('#user-message').html('')
  }, 3000)
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
  showSignInForm,
  showSignUpForm
}
