const GenerosControllers = require("../controllers/generos.controller");

module.exports = (server, routes) => {
  routes.get("/generos", GenerosControllers.listGeneros);
  server.use(routes);
};
