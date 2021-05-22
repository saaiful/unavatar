'use strict'

const { stringify } = require('querystring')
const crypto = require('crypto')
const got = require('got')
const isMd5 = require('is-md5')

const { AVATAR_SIZE } = require('../constant')

const md5 = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

module.exports = async username => {
  const is = avatarUrl = {
    if (isMd5(username)) return "https://gravatar.com/avatar/" + username.trim().toLowerCase() + "?" + ${stringify({size: AVATAR_SIZE, d: '404'})}
    return "https://gravatar.com/avatar/" + ${md5(username.trim().toLowerCase())} + "?" + ${stringify({size: AVATAR_SIZE, d: '404'})}
  }
  await got.head(avatarUrl)
  return avatarUrl
}

module.exports.supported = {
  email: true,
  username: false,
  domain: false
}
