const FindRequest = require("../repositories/findAllRequest");
const pedidos = require("../schemas/requests");

class RequestServices {
  async GetAllRequests() {
    const list = await FindRequest();
    return list;
  }
  async AddRequest({ id_manga, preco_manga, qtde_unidades, total_compra }) {
    const numberPedido =
      Math.floor(Math.random() * (9999 - 1000 + 9999 - 1000)) + 1000;

    const register = await pedidos.create({
      id_pedido: numberPedido,
      id_user: 2,
      id_manga: id_manga,
      preco_manga: preco_manga,
      qtde_unidades: qtde_unidades,
      desconto: 0,
      valor_desconto: 0,
      total_compra: total_compra,
      status: 1,
    });
    return register;
  }
  async FinalizeOrder(id) {
    const request = await pedidos.update(
      {
        status: 3,
      },
      { where: { id_pedido: id } }
    );
    return request;
  }
}

module.exports = new RequestServices();
