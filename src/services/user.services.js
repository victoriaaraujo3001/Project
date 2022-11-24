const users = require("../schemas/users");

class UserServices {
  async InsertUserService({ login, mail, password }) {
    const user = await users.create({
      login: login,
      email: mail,
      password: password,
      status: "1",
    });
    return { login: user.login, email: user.email };
  }
  async FindByUser({ login, password }) {
    const uniqueUser = await users.findOne({
      where: { login: login, password: password },
    });
    
    return uniqueUser;
  }
}

module.exports = new UserServices();
