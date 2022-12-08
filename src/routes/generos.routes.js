const GenerosControllers = require("../controllers/generos.controller");

module.exports = (server, routes) => {
  routes.get("/generos", GenerosControllers.listGeneros);
  routes.get("/genero/:id", GenerosControllers.listGenero);
  routes.get("/filterMangas/:id", GenerosControllers.FilterMangaForGenero);
  server.use(routes);
};