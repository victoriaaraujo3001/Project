const FindRequest = require("../repositories/findAllRequest");
const pedidos = require("../schemas/requests");

class RequestServices {
  async GetAllRequests() {
    const list = await FindRequest();
    return list;
  }
  async AddRequest({ id_manga, preco_manga, qtde_unidades, total_compra }) {
    const numberPedido =
      Math.floor(Math.random() * (9999 - 1000 + 9999 - 1000 + 9999 - 1000)) + 9999;
    console.log(numberPedido);
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
    const finalizeOrder = await pedidos.update(
      {
        status: 3,
      },
      { where: { id_pedido: id } }
    );
    return finalizeOrder;
  }
  async PendingOrders() {
    const pendingOrder = await pedidos.findAll({ where: { status: 1 } });
    return pendingOrder;
  }
  async FinishedOrders() {
    const finishedOrder = await pedidos.findAll({ where: { status: 3 } });
    return finishedOrder;
  }
  async DeleteOrder(id) {
    const deleteOrder = await pedidos.update(
      {
        status: 2,
      },
      { where: { id_pedido: id } }
    );
    return deleteOrder;
  }
}

module.exports = new RequestServices();
