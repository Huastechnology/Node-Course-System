const bcrypt = require('bcrypt')

const matchPassword = async (password, hash) => {
    return bcrypt.compare(password,hash)
}

module.exports = matchPassword