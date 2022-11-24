const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function FilterGenero(id) {
  const genero = await sequelize.query(
    `SELECT 
    t1.nome AS nome,
    t1.preco,
    t1.cod_livro AS código,
    t2.nome as genero
    FROM mangas as t1
    LEFT JOIN generos as t2 ON t1.id_categoria = t2.id_genero
    WHERE t1.id_categoria = ${id}
    `,
    { type: QueryTypes.SELECT }
  );

  return genero;
}

module.exports = FilterGenero;