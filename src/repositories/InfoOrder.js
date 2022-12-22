const { QueryTypes } = require("sequelize");
const sequelize = require("../config/configSequelize");

async function InfoOrder(id_pedido, id_user) {
  const info = await sequelize.query(
    `SELECT
    t1.*,
    t2.*
    FROM pedidos AS t1
    JOIN mangas  AS t2 ON t1.id_manga = t2.id
    JOIN users   AS t3 ON t1.id_user  = t3.id
    WHERE t1.id_pedido = ${id_pedido} AND t1.status = 3 AND t1.id_user = ${id_user}
    `,
    { type: QueryTypes.SELECT }
  );

  return info;
}

module.exports = InfoOrder;
