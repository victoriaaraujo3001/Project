const users = require("../schemas/users");
const tokenServices = require("../services/token.services");

class UserServices {
  async InsertUserService({ login, email, password }) {
    const user = await users.create({
      login: login,
      email: email,
      password: password,
      status: "1",
    });
    return { login: user.login, email: user.email };
  }
  async FindByUser({ login, password }) {
    const uniqueUser = await users.findOne({
      where: { login: login, password: password },
    });

    const token = await tokenServices.generateToken({
      id_user: uniqueUser.id,
      login: uniqueUser.login,
    });

    return { user:{ id: uniqueUser.id, login: uniqueUser.login}, token };
  }
}

module.exports = new UserServices();
