const Disfavor = require("../repositories/disfavor");
const Favorites = require("../repositories/favorites");
const favorites = require("../schemas/favorites");
const mangas = require("../schemas/mangas");

class MangasServices {
  async AllMangas() {
    const allMangas = await mangas.findAll();
    return allMangas;
  }
  async FindMangaByCod(cod) {
    const mangaBycod = await mangas.findOne({ where: { cod_livro: cod } });
    return mangaBycod;
  }
  async FindMangaById(id) {
    const mangaById = await mangas.findByPk(id);
    return mangaById;
  }
  async RegisterManga({ nome, preco, qntd_estoque, categoria }) {
    const code =
      Math.floor(Math.random() * (9999 - 1000 + 9999 - 1000 + 9999 - 1000)) +
      9999;

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
  async PromotionsMangas() {
    const promotions = await mangas.findAll({ where: { desconto: 1 } });
    return promotions;
  }
  async FavoritesMangas(id_user) {
    const favorite = await Favorites(id_user);
    return favorite;
  }
  async Favorite(id_user, id_manga) {
    const favoriteManga = await favorites.create({
      id_user: id_user,
      id_manga: id_manga,
      status: 1,
    });
    return favoriteManga;
  }
  async DisfavorManga(id_manga, id_user) {
    const disfavor = await Disfavor(id_manga, id_user);
    return disfavor;
  }
}

module.exports = new MangasServices();
