const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function Disfavor(id_manga, id_user) {
  const disfavor = await sequelize.query(
    `UPDATE favoritos SET status = '2' WHERE id_manga = ${id_manga} AND id_user = ${id_user}`,
    { type: QueryTypes.UPDATE }
  );

  return disfavor;
}

module.exports = Disfavor;
