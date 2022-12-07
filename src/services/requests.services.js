const pedidos = require("../schemas/requests");

class RequestServices {
  async GetAllRequests() {
    const list = await pedidos.findAll();
    return list;
  }
  async AddRequest({ id_manga, preco_manga, desconto, valor_desconto }) {
    const numberPedido = Math.floor(Math.random() * (9999 - 1000 + 9999 - 1000)) + 1000;

    const register = await pedidos.create({
      id_pedido: numberPedido,
      id_manga: id_manga,
      preco_manga: preco_manga,
      desconto: desconto,
      valor_desconto: valor_desconto,
      status: 1,
    });
    return register;
  }
}

module.exports = new RequestServices();
