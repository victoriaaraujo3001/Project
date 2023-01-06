const md5 = require("md5");
const admin = require("../schemas/admin");
const tokenServices = require("./token.services");

class AdminServices {
  async RegisterAdmin({ login, email, password, nome, tel }) {
    const encryptedPassword = md5(password);

    const user = await admin.create({
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

    const uniqueUser = await admin.findOne({
      where: { login: login, password: encryptedPassword, status: 1 },
    });

    // if(uniqueUser.status !== 1){
    //   throw new Error("")
    // }
    const tokenAdmin = await tokenServices.generateToken({
      id_user: uniqueUser.id,
      login: uniqueUser.login,
    });

    return { user: { id: uniqueUser.id, login: uniqueUser.login }, tokenAdmin };
  }
}

module.exports = new AdminServices();
