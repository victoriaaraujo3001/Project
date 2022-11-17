const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const users = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER,
  },
  { timestamps: false }
);

module.exports = users;

