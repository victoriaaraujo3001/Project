const ResquestController = require("../controllers/requests.controller");
const AddRequestValidation = require("../validation/addRequest.validation.js");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.post(
    "/requests/register",
    AddRequestValidation,
    ResquestController.AddRequests
  );
  routes.get("/requests", ResquestController.listRequests)
  server.use(routes);
};
