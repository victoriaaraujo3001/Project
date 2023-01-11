const AdminController = require("../controllers/admin.controller");
const ValidadeRegistration = require("../validation/registerAdmin.validation");

module.exports = (server, routes) => {
  routes.post(
    "/admin/register",
    ValidadeRegistration,
    AdminController.Register
  );
  routes.post("/admin/auth", AdminController.FindUser);
  server.use(routes);
};
