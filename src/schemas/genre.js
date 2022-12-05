const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const generos = sequelize.define(
  "generos",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_genero: DataTypes.STRING,
    nome: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = generos;
