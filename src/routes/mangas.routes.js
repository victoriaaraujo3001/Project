const MangasController = require("../controllers/mangas.controller");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.get("/mangas", MangasController.FindAllMangas);
  routes.get("/manga/cod/:cod", MangasController.FindManga);
  routes.get("/manga/:id", MangasController.FindMangaById);
  routes.post("/register", MangasController.Register);
  routes.get("/promotions", MangasController.Promotions);
  routes.get("/favorites", MangasController.Favorites);
  server.use(routes);
};
