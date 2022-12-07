const ResquestController = require("../controllers/requests.controller");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.post("/requests/register", ResquestController.AddRequests);
  server.use(routes);
};
