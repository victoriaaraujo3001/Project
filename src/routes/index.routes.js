const { Router } = require("express");
const RouteUser = require("./user.routes");
const RouteGenero = require("./generos.routes")

module.exports = (server) => {
  server.use((req, res, next) => {
    RouteUser(server, new Router());
    RouteGenero(server, new Router())
    next();
  });
};
