const generos = require("../schemas/generos");
const FilterGenero = require("../repositories/listagemGenero");

class GenerosServices {
  async GetAllGeneros() {
    const listGeneros = await generos.findAll();
    const names = listGeneros.map((item) => {
      return {
        id: item.id,
        categoria: item.nome,
      };
    });

    return names;
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

module.exports = new GenerosServices();
