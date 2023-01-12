const AdminController = require("../controllers/admin.controller");
const ValidadeRegistration = require("../validation/registerAdmin.validation");

module.exports = (server, routes) => {
  routes.post(
    "/admin/register",
    ValidadeRegistration,
    AdminController.Register
  );
  routes.post("/admin/auth", AdminController.FindUser);
  routes.get("/admin/allRequests", AdminController.AllRequestsAdmin);
  routes.get("/admin/oneRequest/:pedido", AdminController.OneRequestsAdmin);
  routes.get("/admin/allRequests/:user", AdminController.AllRequestsAdminByUser);
  server.use(routes);
};
