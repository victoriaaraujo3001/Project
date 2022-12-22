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
    id_user: DataTypes.INTEGER,
    id_manga: {
      type: DataTypes.INTEGER,
    },
    preco_manga: DataTypes.FLOAT,
    qtde_unidades: DataTypes.INTEGER,
    total_compra: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
  },
  { timestamps: false }
);

module.exports = pedidos;
