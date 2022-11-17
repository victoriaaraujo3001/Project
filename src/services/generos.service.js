const generos = require("../schemas/generos");

class GenerosServices {
  async GetAllGeneros() {
    const listGeneros = await generos.findAll();
    const names = listGeneros.map((item) => {
      return {
        nome: item.nome,
      };
    });

    return names;
  }
}

module.exports = new GenerosServices();
