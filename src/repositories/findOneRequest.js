const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function FindOneRequest(id_user, id) {
  const findRequest = await sequelize.query(
    `SELECT 
    t1.*,
    t2.*,
    t3.*,
    t2.nome
    FROM pedidos AS t1
    JOIN mangas  AS t2   ON t1.id_manga = t2.id
    JOIN users   AS t3   ON t1.id_user  = t3.id
    WHERE t1.status = 3 AND t1.id_user = ${id_user} AND t1.id_pedido = ${id}
    `,
    { type: QueryTypes.SELECT }
  );

  return findRequest;
}

module.exports = FindOneRequest;
