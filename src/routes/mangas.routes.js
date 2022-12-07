const MangasController = require("../controllers/mangas.controller");

module.exports = (server, routes) => {
  routes.get("/mangas", MangasController.FindAllMangas);
  routes.post("/register", MangasController.Register);
  routes.get("/promotions", MangasController.Promotions);
  server.use(routes);
};
