const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const mangas = sequelize.define(
    "mangas",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      id_categoria: DataTypes.STRING,
      nome: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      qntd_estoque: DataTypes.INTEGER,
      cod_livro: DataTypes.INTEGER,
      status: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  
  module.exports = mangas;