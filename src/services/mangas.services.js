const mangas = require("../schemas/mangas");

class MangasServices {
  async AllMangas() {
    const allMangas = await mangas.findAll();
    return allMangas;
  }

  async RegisterManga({ nome, preco, qntd_estoque, categoria }) {
    const code = Math.floor(Math.random() * (9999 - 1000 + 9999 - 1000)) + 1000;

    const register = await mangas.create({
      nome: nome,
      preco: preco,
      qntd_estoque: qntd_estoque,
      id_categoria: categoria,
      cod_livro: code,
      status: 1,
    });
    return register;
  }
  async PromotionsMangas(){
    const promotions = await mangas.findAll({where: { desconto: 1 }})
    return promotions;
  }
}

module.exports = new MangasServices();
