const { Router } = require("express");
const RouteUser = require("./user.routes");
const RouteGenero = require("./generos.routes");
const RouterMangas = require("./mangas.routes");

module.exports = (server) => {
  server.use((req, res, next) => {
    RouteUser(server, new Router());
    RouteGenero(server, new Router());
    RouterMangas(server, new Router())
    next();
  });
};
