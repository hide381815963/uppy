'use strict'

/**
 * This module serves as an Async wrapper for sessionStorage
 */
module.exports.setItem = (key, value) => {
  return new Promise((resolve) => {
    sessionStorage.setItem(key, value)
    resolve()
  })
}

module.exports.getItem = (key) => {
  return Promise.resolve(sessionStorage.getItem(key))
}

module.exports.removeItem = (key) => {
  return new Promise((resolve) => {
    sessionStorage.removeItem(key)
    resolve()
  })
}
