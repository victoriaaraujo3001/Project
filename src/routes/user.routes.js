const UserController = require("../controllers/user.controller");
const ValidadeUser = require("../validation/auth.validation");

module.exports = (server, routes) => {
  routes.post("/user/insert", UserController.InsertUser);
  routes.post("/user/auth", ValidadeUser, UserController.FindUser);
  server.use(routes);
};
