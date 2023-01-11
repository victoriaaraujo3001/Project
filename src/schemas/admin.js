const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const admin = sequelize.define(
    "user_admins",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  
  module.exports = admin;
  