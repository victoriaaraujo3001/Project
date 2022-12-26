const ResquestController = require("../controllers/requests.controller");
const AddRequestValidation = require("../validation/addRequest.validation.js");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.post(
    "/requests/register",
    ValidationToken,
    AddRequestValidation,
    ResquestController.AddRequests
  );
  routes.get("/requests", ValidationToken, ResquestController.listRequests);
  routes.get(
    "/finalizeOrder/:id_pedido",
    ValidationToken,
    ResquestController.Finalize
  );
  routes.get(
    "/allFinishedOrders",
    ValidationToken,
    ResquestController.AllFinishedOrders
  );
  routes.get(
    "/allPendingOrders",
    ValidationToken,
    ResquestController.AllPendingOrders
  );
  routes.get("/deleteOrder/:id", ValidationToken, ResquestController.Delete);
  server.use(routes);
};
