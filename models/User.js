const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require('bcrypt');

// Number of rounds for bcrypt to generate the salt
const SALT_ROUNDS = 10;

const User = sequelize.define("users", {
  user_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, SALT_ROUNDS);
      this.setDataValue('password', hashedPassword);
    },
  },
});

module.exports = User;
