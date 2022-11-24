const MangasController = require("../controllers/mangas.controller");

module.exports = (server, routes) => {
  routes.get("/mangas", MangasController.FindAllMangas);
  routes.post("/register", MangasController.Register);
  server.use(routes);
};
