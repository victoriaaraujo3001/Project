const mangasServices = require("../services/mangas.services");

class MangasController {
  async FindAllMangas(req, res, next) {
    try {
      const mangas = await mangasServices.AllMangas();

      res.status(200).send(mangas);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async FindManga(req, res, next) {
    try {
      const { cod } = req.params;
      const manga = await mangasServices.FindMangaByCod(cod);
      res.status(200).send(manga);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async FindMangaById(req, res, next) {
    try {
      const { id } = req.params;
      const manga = await mangasServices.FindMangaById(id);

      res.status(200).send(manga);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async Register(req, res, next) {
    try {
      const registeredManga = await mangasServices.RegisterManga(req.body);

      res.status(201).send({ message: "Mangá cadastrado com sucesso" });
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async Promotions(req, res, next) {
    try {
      const promotions = await mangasServices.PromotionsMangas();
      res.status(200).send(promotions);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async Favorites(req, res, next) {
    try {
      const { id_user } = req.infoToken;
      const favorites = await mangasServices.FavoritesMangas(id_user);

      res.status(200).send(favorites);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async AddFavorite(req, res, next) {
    try {
      const { id_user } = req.infoToken;
      const { id_manga } = req.params;
      const favorite = await mangasServices.Favorite(id_user,id_manga);

      res.status(201).send(favorite);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async Disfavor(req, res, next) {
    try {
      const { id } = req.params;
      const { id_user } = req.infoToken;
      const disfavor = await mangasServices.DisfavorManga(id, id_user);

      res.status(200).send({ message: "Retirado da lista de favoritos" });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
}

module.exports = new MangasController();
