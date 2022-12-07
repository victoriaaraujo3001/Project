const sequelize = require("../config/configSequelize");
const { DataTypes } = require("sequelize");

const pedidos = sequelize.define(
    "pedidos",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      id_pedido: DataTypes.INTEGER,
      id_manga: {
        allowNull: false,
        foreignKey: true,
        autoIncrement: false,
        type: DataTypes.INTEGER,
      },
      preco_manga: DataTypes.FLOAT,
      desconto: DataTypes.INTEGER,
      valor_desconto: DataTypes.INTEGER,
      status: DataTypes.INTEGER
    },
    { timestamps: false }
  );
  
  module.exports = pedidos;