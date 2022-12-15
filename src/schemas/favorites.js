const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const favorites = sequelize.define(
  "favoritos",
  {
    id_favorito: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_user: DataTypes.INTEGER,
    id_manga: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
  },
  { timestamps: false }
);

module.exports = favorites;
