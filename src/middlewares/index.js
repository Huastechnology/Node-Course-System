const verifyEmptyFields = require('../middlewares/verifyEmptyFields')
const verifyDuplicatesEmails = require('../middlewares/verifyDuplicatesEmails')
const verifyRole = require('../middlewares/verifyRole')
const verifyId = require('../middlewares/verifyId')
const verifyAuth = require('../middlewares/verifyAuth')
const verifyUserAccess = require('../middlewares/verifyUserAccess')

module.exports = {
  verifyEmptyFields,
  verifyDuplicatesEmails,
  verifyRole,
  verifyId,
  verifyAuth,
  verifyUserAccess
}