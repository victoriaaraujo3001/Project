const UserController = require("../controllers/user.controller");
const ValidadeUser = require("../validation/auth.validation");
const ValidadeRegistration = require("../validation/registerUser.validation");
const ValidationToken = require("../validation/token.validation");

module.exports = (server, routes) => {
  routes.post("/user/register", ValidationToken,ValidadeRegistration, UserController.InsertUser);
  routes.post("/user/auth", ValidadeUser, UserController.FindUser);
  server.use(routes);
};
