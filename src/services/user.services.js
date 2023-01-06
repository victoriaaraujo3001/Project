const md5 = require("md5");
const users = require("../schemas/users");
const tokenServices = require("../services/token.services");

class UserServices {
  async InsertUserService({ login, email, password, nome, tel }) {
    const encryptedPassword = md5(password);

    const user = await users.create({
      login: login,
      email: email,
      password: encryptedPassword,
      nome: nome,
      telefone: tel,
      status: "1",
    });
    return { login: user.login, email: user.email };
  }
  async FindByUser({ login, password }) {
    const encryptedPassword = md5(password);

    const uniqueUser = await users.findOne({
      where: { login: login, password: encryptedPassword },
    });

    const token = await tokenServices.generateToken({
      id_user: uniqueUser.id,
      login: uniqueUser.login,
    });

    return { user: { id: uniqueUser.id, login: uniqueUser.login }, token };
  }
}

module.exports = new UserServices();
