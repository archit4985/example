const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  encrptPassword: (password) => {
    return bcrypt.hashSync(password, saltRounds);
  },

  checkPassword: (newPassword, oldPassword) => {
    return bcrypt.compareSync(newPassword, oldPassword);
  },
};
