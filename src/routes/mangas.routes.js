const MangasController = require("../controllers/mangas.controller");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.get("/mangas", MangasController.FindAllMangas);
  routes.get("/manga/cod/:cod", ValidationToken, MangasController.FindManga);
  routes.get("/manga/:id", MangasController.FindMangaById);
  routes.post("/register", MangasController.Register);
  routes.get("/promotions", MangasController.Promotions);
  routes.get("/favorites", ValidationToken, MangasController.Favorites);
  routes.get(
    "/addFavorite/:id_manga/:actionFavorite",
    ValidationToken,
    MangasController.AddFavorite
  );
  routes.get("/disfavor/:id", ValidationToken, MangasController.Disfavor);
  server.use(routes);
};
