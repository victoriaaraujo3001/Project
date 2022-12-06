const pedidos = require("../schemas/requests");

class RequestServices {
  async GetAllRequests() {
    const list = await pedidos.findAll();
    return list;
  }
  async GetOneGenero(id){
    const one = await generos.findByPk(id);

    return { id: one.id, nome: one.nome};
  }

  async FilterGenero(id){
    const filter = await FilterGenero(id)
    return filter;
  }
}

module.exports = new RequestServices();
