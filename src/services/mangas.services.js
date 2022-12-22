const Disfavor = require("../repositories/disfavor");
const FavoritesMangas = require("../repositories/favorites");
const Favorites = require("../repositories/favorites");
const favorites = require("../schemas/favorites");
const mangas = require("../schemas/mangas");

class MangasServices {
  async AllMangas() {
    const allMangas = await mangas.findAll();
    return allMangas;
  }
  async FindMangaByCod(cod, id_user) {
    const mangaBycod = await mangas.findOne({ where: { cod_livro: cod } });
    const favorite = await FavoritesMangas(id_user, mangaBycod.id);
    return {
      ...mangaBycod.dataValues,
      favorite: !!favorite.length,
    };
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
  async Favorite(id_user, id_manga, actionFavorite) {
    const favorite = await FavoritesMangas(id_user);
    
    if (actionFavorite == "true") {
      return await this.DisfavorManga(id_manga, id_user);
    }

    if (!favorite.length) {
      await favorites.create({
        id_user: id_user,
        id_manga: id_manga,
        status: 1,
      });
      return true;
    }

    return true;
  }
  async DisfavorManga(id_manga, id_user) {
    const disfavor = await Disfavor(id_manga, id_user);
    return disfavor[1] == 0 ? false : true;
  }
}

module.exports = new MangasServices();
