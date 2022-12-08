const MangasController = require("../controllers/mangas.controller");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.get("/mangas", MangasController.FindAllMangas);
  routes.get("/manga/:cod", MangasController.FindManga);
  routes.post("/register", MangasController.Register);
  routes.get("/promotions", MangasController.Promotions);
  server.use(routes);
};
