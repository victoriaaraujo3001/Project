const ResquestController = require("../controllers/requests.controller");
const { Payment } = require("../controllers/payment.controller");
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
  routes.get(
    "/findOrder/:id",
    ValidationToken,
    ResquestController.FindOrderById
  );
  routes.post("/payment/:nome", Payment);
  server.use(routes);
};
