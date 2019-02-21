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
  $('.sign-in-display').addClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('.swap-form-display').addClass('hidden')
  $('.navbar-nav').removeClass('hidden')
  $('#navbarDropdownMenuLink').html(store.user.email)
  removeMessage()
}

const signInFailure = () => {
  $('#user-message').html('Error on Sign-in!')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordSuccess = () => {
  $('#alert-message').html('Password Change Successful!')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordFailure = () => {
  $('#alert-message').html('Error Changing Password. Please try again.')
  $('form').trigger('reset')
  removeMessage()
}

const signOutSuccess = () => {
  $('#user-message').html('Successfully Signed-Out!')
  $('form').trigger('reset')
  $('#game-board').addClass('hidden')
  $('.game-area').addClass('hidden')
  $('#new-game-button').addClass('hidden')
  $('.navbar-nav').addClass('hidden')
  $('.notifications-window').addClass('hidden')
  $('.swap-form-display').removeClass('hidden')
  $('#new-game-button').removeAttr('disabled')
  store.user = {}
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
  $('form').trigger('reset')
  $('.swap-form-message').html('Need an account?')
}

const showSignUpForm = function () {
  $('.sign-in-display').addClass('hidden')
  $('.sign-up-display').removeClass('hidden')
  $('.sign-up-button').addClass('hidden')
  $('.sign-in-button').removeClass('hidden')
  $('form').trigger('reset')
  $('.swap-form-message').html('Already have an account?')
}

const closeModal = function () {
  $('#changePasswordModal').modal('toggle')
  // wait until modal fades before reseting forms
  setTimeout(() => {
    $('#change-password-form').trigger('reset')
  }, 2000)
}

let timeOut = null

const stopTimeout = function () {
  clearTimeout(timeOut)
}

const removeMessage = function () {
  stopTimeout()
  timeOut = setTimeout(() => {
    $('#user-message').html('')
    $('#alert-message').html('')
  }, 3500)
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
  showSignUpForm,
  closeModal
}
