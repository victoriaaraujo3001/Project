const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function Mangas() {
  const manga = await sequelize.query(
    `SELECT 
    t1.*,
    t2.nome  AS categoria
    FROM mangas  AS t1 
    JOIN generos AS t2 ON t1.id_categoria = t2.id
    ORDER BY t1.nome ASC`,
    { type: QueryTypes.SELECT }
  );

  return manga;
}

module.exports = Mangas;
