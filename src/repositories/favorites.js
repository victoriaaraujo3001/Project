const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function FavoritesMangas(id_user) {
  const favorites = await sequelize.query(
    `SELECT
        t1.*,
        t2.*
    FROM mangas    AS t1
    JOIN favoritos AS t2 ON t1.id      = t2.id_manga
    JOIN users     AS t3 ON t2.id_user = t3.id
    WHERE t2.id_user = ${id_user} AND t2.status = 1
    `,
    { type: QueryTypes.SELECT }
  );

  return favorites;
}

module.exports = FavoritesMangas;
