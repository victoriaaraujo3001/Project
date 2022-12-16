const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function Favorites(id_user) {
  const favorites = await sequelize.query(
    `SELECT 
    t1.*,
    t3.*
  FROM favoritos AS t1
  JOIN users     AS t2 ON t1.id_user  = t2.id
  JOIN mangas    AS t3 ON t1.id_manga = t3.id
  WHERE t1.id_user = ${id_user} AND t1.status = 1
    `,
    { type: QueryTypes.SELECT }
  );

  return favorites;
}

module.exports = Favorites;
